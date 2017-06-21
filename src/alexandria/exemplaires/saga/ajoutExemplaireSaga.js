import {takeEvery} from 'redux-saga/effects';
import {AJOUTE_EXEMPLAIRE} from '../actions/ajoutExemplaireActions';
import {call} from 'redux-saga/effects';

export default function* ajoutExemplaireSaga(exemplairesApi) {
  yield takeEvery(AJOUTE_EXEMPLAIRE, ajoute);

  function* ajoute({payload: volume}) {
    yield call(exemplairesApi.ajoute, volume.isbn);
  }
}