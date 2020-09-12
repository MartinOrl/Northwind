import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home/home'
import Header from './components/header/header'
import Collection from './components/collection/collection'

import { AddItem } from './redux/shopData/shopActions'
import { connect } from 'react-redux';

import { ShopData } from './testSuite'


function App({addItem}) {
  useEffect(() => {
    addItem(ShopData)
  }, [addItem])

  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:id' component={Collection} />
        </Switch>
    </div>
  )
}


const mapDispatch = dispatch => ({
  addItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatch)(App);
