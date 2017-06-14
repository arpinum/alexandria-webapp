import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(()=>{});

const AppContainer = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

export default AppContainer;