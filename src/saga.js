import {call} from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './authentification/saga/loginSaga';

export default function* ApplicationSaga() {
  const {token, lecteur} = yield call(loginSaga(axios));
  axios.interceptors.request.use(configuration => {
    configuration.headers = {
      'Authorization': `Bearer ${token}`
    };
    return configuration;
  });
  console.log(lecteur);
  axios.get('/alexandria/livres');
}
