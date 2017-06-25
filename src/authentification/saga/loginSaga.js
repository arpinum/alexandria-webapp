import {LOGIN, loginReussi} from '../actions';
import {call, put, take} from 'redux-saga/effects';

export default function* login(authApi) {
  const {payload} = yield take(LOGIN);
  const {token: nouveauToken, lecteur: nouveauLecteur} = yield call(authApi.connecte, payload);
  yield put(loginReussi(nouveauToken, nouveauLecteur));
}
