import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(() => {
}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSaga);