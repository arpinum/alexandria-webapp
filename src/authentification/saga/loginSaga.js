import {LOGIN, loginReussi} from '../actions';
import {call, put, select, take} from 'redux-saga/effects';
import AuthentificationApi from '../api/AuthentificationApi';

export default function* loginSaga(axios) {
  const authApi = AuthentificationApi(axios);
  const {token, lecteur} = yield select(({app}) => app);
  if (token) {
    yield put(loginReussi(token, lecteur));
  }
  const {payload} = yield take(LOGIN);
  const {token: nouveauToken, lecteur: nouveauLecteur} = yield call(authApi.connecte, payload);
  yield put(loginReussi(nouveauToken, nouveauLecteur));
}
