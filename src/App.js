import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'


import Header from './components/header/header'


function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}



export default App;
