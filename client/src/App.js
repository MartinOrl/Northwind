import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'


import Header from './components/header/header'

import Home from './pages/Home/home'
import Collection from './pages/Collection/collection'
import CheckoutPage from './pages/Checkout/checkout'

import { AddHotDeals } from './redux/shopData/shopActions'
import { connect } from 'react-redux';
import { auth, createUserProfile, firestore } from './firebase/firebase';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';



function App({ addHotDeals}) {
  useEffect(() => {
    firestore.collection('shopData').doc('hotDeals').get().then(doc => addHotDeals(doc.data().items))
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        console.log("Logged in")
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.id)
          console.log(snapShot.data())
        })
      }
    })


  }, [addHotDeals])


  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signIn' component={Signin} />
          <Route exact path='/signUp' component={Signup} />
          <Route path='/:id' component={Collection} />
        </Switch>
    </div>
  )
}


const mapDispatch = dispatch => ({
  addHotDeals: deals => dispatch(AddHotDeals(deals))
})

export default connect(null, mapDispatch)(App);
