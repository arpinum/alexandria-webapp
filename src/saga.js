import {call, spawn} from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './authentification/saga/loginSaga';
import alexandriaSaga from './alexandria/saga';
import appSaga from './app/saga';

export default function* ApplicationSaga(history) {
  yield spawn(appSaga, history);
  yield spawn(alexandriaSaga, axios);

  const {token} = yield call(loginSaga(axios));
  axios.interceptors.request.use(configuration => {
    configuration.headers = {
      'Authorization': `Bearer ${token}`,
    };
    return configuration;
  });
}
