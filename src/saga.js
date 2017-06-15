import {call} from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './authentification/saga/loginSaga';
import AuthentificationApi from './authentification/api/AuthentificationApi';

export default function* ApplicationSaga() {
  const {token} = yield call(loginSaga(AuthentificationApi(axios)));
  axios.interceptors.request.use(configuration => {
    configuration.headers = {
      'Authorization': `Bearer ${token}`
    };
    return configuration;
  });
}
