import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'


import Cart from './components/cart/cart'


function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}



export default App;
