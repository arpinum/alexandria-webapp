import {call, spawn} from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './authentification/saga/loginSaga';
import livresSaga from './alexandria/livres/saga';

export default function* ApplicationSaga(history) {
  const {token} = yield call(loginSaga(axios));
  axios.interceptors.request.use(configuration => {
    configuration.headers = {
      'Authorization': `Bearer ${token}`,
    };
    return configuration;
  });
  yield spawn(livresSaga(history, axios));
}
