import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import createStore from './store';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const store = createStore(history);

const AppContainer = () => (
  <Provider store={store}>
    <App history={history}/>
  </Provider>
);

export default AppContainer;
