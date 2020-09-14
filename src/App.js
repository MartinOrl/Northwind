import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'


import Header from './components/header/header'

import Home from './pages/Home/home'
import Collection from './pages/Collection/collection'
import Checkout from './pages/Checkout/checkout'

import { AddHotDeals, AddItem } from './redux/shopData/shopActions'
import { connect } from 'react-redux';

import { NewShopData } from './testSuite'


function App({addItem, addHotDeals}) {
  useEffect(() => {
    let temp = []
    var shopData = Object.entries(NewShopData).map(collection => collection[1])
    shopData = shopData.slice(1)
    shopData.map(data => temp = [...temp, ...data])
    addItem(temp)

    let hotDeals = Object.entries(NewShopData)[0][1]
    addHotDeals(hotDeals)
    
  }, [addItem, addHotDeals])


  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
          <Route path='/:id' component={Collection} />
        </Switch>
    </div>
  )
}


const mapDispatch = dispatch => ({
  addItem: item => dispatch(AddItem(item)),
  addHotDeals: deals => dispatch(AddHotDeals(deals))
})

export default connect(null, mapDispatch)(App);
