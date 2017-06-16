import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import appReducer from './app/reducers';
import createSagaMiddleware from 'redux-saga';
import appSaga from './saga';

const buildStore = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({
    app: appReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(appSaga, history);
  return store;
};

export default buildStore;

