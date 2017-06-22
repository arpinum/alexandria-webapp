import {LOGIN_REUSSI} from '../authentification/actions';
import {EXEMPLAIRE_AJOUTE} from '../alexandria/exemplaires/actions/ajoutExemplaireActions';
import {takeEvery} from 'redux-saga/effects';

export default function* routingSaga(history) {
  const goto = (path) => () => history.push(path);

  yield takeEvery(LOGIN_REUSSI, goto('/livres'));
  yield takeEvery(EXEMPLAIRE_AJOUTE, goto('/livres'));
}
