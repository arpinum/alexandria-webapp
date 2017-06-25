import {spawn, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import authSaga from './authentification/saga';
import alexandriaSaga from './alexandria/saga';
import appSaga from './app/saga';
import {LOGIN_REUSSI} from './authentification/actions';

export default function* ApplicationSaga(history) {
  yield takeEvery(LOGIN_REUSSI, configureAxios);
  yield spawn(appSaga, history);
  yield spawn(alexandriaSaga, axios);
  yield spawn(authSaga, axios);

  function configureAxios({payload: {token}}) {
    axios.interceptors.request.use(configuration => {
      configuration.headers = {
        'Authorization': `Bearer ${token}`,
      };
      return configuration;
    });
  }
}
