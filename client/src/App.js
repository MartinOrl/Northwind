import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


import Header from './components/header/header'
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';

import Home from './pages/Home/home'
import Collection from './pages/Collection/collection'
import CheckoutPage from './pages/Checkout/checkout'

import { AddHotDeals } from './redux/shopData/shopActions'
import { SetCurrentUser } from './redux/user/userActions'

import { auth, createUserProfile, firestore } from './firebase/firebase';
import { SelectCurrentUser } from './redux/user/userSelectors';
import MyOrders from './components/myorders/myorders';




function App({ addHotDeals, setUser, user}) {
  useEffect(() => {
    firestore.collection('shopData').doc('hotDeals').get().then(doc => addHotDeals(doc.data().items))
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setUser(userAuth)
    })


  }, [addHotDeals, setUser])


  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signIn'>{user ? <Redirect to='/' /> : <Signin />}</Route>
          <Route exact path='/signUp'>{user ? <Redirect to='/' /> : <Signup /> }</Route>
          <Route exact path='/myOrders' component={MyOrders} />
          <Route path='/:id' component={Collection} />
        </Switch>
    </div>
  )
}

const mapState = createStructuredSelector({
  user: SelectCurrentUser
})

const mapDispatch = dispatch => ({
  addHotDeals: deals => dispatch(AddHotDeals(deals)),
  setUser: user => dispatch(SetCurrentUser(user))
})

export default connect(mapState, mapDispatch)(App);
