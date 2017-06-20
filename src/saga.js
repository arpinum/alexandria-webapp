import {call, spawn} from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './authentification/saga/loginSaga';
import alexandriaSaga from './alexandria/saga';

export default function* ApplicationSaga(history) {
  const {token} = yield call(loginSaga(axios));
  axios.interceptors.request.use(configuration => {
    configuration.headers = {
      'Authorization': `Bearer ${token}`,
    };
    return configuration;
  });
  yield spawn(alexandriaSaga, history, axios);
}
