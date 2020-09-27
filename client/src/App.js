import React, {lazy, Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


import Header from './components/header/header'
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';
import MyOrders from './components/myorders/myorders';
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import Spinner from './components/spinner/spinner'


import { AddHotDeals } from './redux/shopData/shopActions'
import { SetCurrentUser } from './redux/user/userActions'

import { auth, createUserProfile, firestore } from './firebase/firebase';
import { SelectCurrentUser } from './redux/user/userSelectors';

const Home = lazy(() => import('./pages/Home/home'))
const Collection = lazy(() => import('./pages/Collection/collection'))
const CheckoutPage = lazy(() => import('./pages/Checkout/checkout'))

class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){
    const { addHotDeals, setUser } = this.props
    firestore.collection('shopData').doc('hotDeals').get().then(doc => addHotDeals(doc.data().items))
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setUser(userAuth);
    })
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  };

  render(){
    const { user } = this.props
    return(
      <div>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signIn'>{user ? <Redirect to='/' /> : <Signin />}</Route>
              <Route exact path='/signUp'>{user ? <Redirect to='/' /> : <Signup /> }</Route>
              <Route exact path='/myOrders' component={MyOrders} />
              <Route exact path='/' component={Home} />
              <Route path='/collection/:id' component={Collection} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    )
  };

}



const mapState = createStructuredSelector({
  user: SelectCurrentUser
})

const mapDispatch = dispatch => ({
  addHotDeals: deals => dispatch(AddHotDeals(deals)),
  setUser: user => dispatch(SetCurrentUser(user))
})

export default connect(mapState, mapDispatch)(App);
