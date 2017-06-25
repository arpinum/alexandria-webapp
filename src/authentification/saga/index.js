import {spawn} from 'redux-saga/effects';
import AuthentificationApi from '../api/AuthentificationApi';
import loginSaga from './loginSaga';
import rejoueLoginSaga from './rejoueLoginSaga';

export default function*(axios) {
  const api = new AuthentificationApi(axios);
  yield spawn(rejoueLoginSaga);
  yield spawn(loginSaga, api);
}
