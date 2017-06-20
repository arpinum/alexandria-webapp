import {fork, spawn, takeEvery, select} from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './authentification/saga/loginSaga';
import alexandriaSaga from './alexandria/saga';
import appSaga from './app/saga';
import {LOGIN_REUSSI} from './authentification/actions';

export default function* ApplicationSaga(history) {
  const token = yield select(({app: {token}}) => token);
  yield fork(loginSaga(axios));
  if (token) {
    yield fork(demarre, {token});
  } else {
    yield takeEvery(LOGIN_REUSSI, demarre);
  }

  function* demarre({token}) {
    axios.interceptors.request.use(configuration => {
      configuration.headers = {
        'Authorization': `Bearer ${token}`,
      };
      return configuration;
    });

    yield spawn(appSaga, history);
    yield spawn(alexandriaSaga, axios);
  }
}
