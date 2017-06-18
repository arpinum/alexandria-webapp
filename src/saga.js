import {spawn, call} from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './authentification/saga/loginSaga';
import AuthentificationApi from './authentification/api/AuthentificationApi';
import livresSaga from './alexandria/livres/saga';
import LivresApi from './alexandria/livres/api/LivresApi';

export default function* ApplicationSaga(history) {
  const {token} = yield call(loginSaga(AuthentificationApi(axios)));
  axios.interceptors.request.use(configuration => {
    configuration.headers = {
      'Authorization': `Bearer ${token}`,
    };
    return configuration;
  });
  yield spawn(livresSaga(history, LivresApi(axios)));
}
