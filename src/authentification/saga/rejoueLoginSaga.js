import {loginReussi} from '../actions';
import {put, select} from 'redux-saga/effects';

export const selector = ({app: {token, lecteur}}) => ({token, lecteur});

export default function* rejoueLogin() {
  const {token, lecteur} = yield select(selector);
  if (token) {
    yield put(loginReussi(token, lecteur));
  }
}
