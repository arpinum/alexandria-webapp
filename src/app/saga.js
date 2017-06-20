import {LOGIN_REUSSI} from '../authentification/actions';
import {takeEvery} from 'redux-saga/effects';

export default function* routingSaga(history) {
  const goto = (path) => () => history.push(path);

  yield takeEvery(LOGIN_REUSSI, goto('/livres'));
}
