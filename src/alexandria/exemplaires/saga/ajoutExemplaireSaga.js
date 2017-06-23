import {takeEvery, call, put} from 'redux-saga/effects';
import {AJOUTE_EXEMPLAIRE, exemplaireAjoute} from '../actions/ajoutExemplaireActions';

export default function* ajoutExemplaireSaga(exemplairesApi) {
  yield takeEvery(AJOUTE_EXEMPLAIRE, ajoute);

  function* ajoute({payload: volume}) {
    const {id} = yield call(exemplairesApi.ajoute, volume.isbn);
    yield put(exemplaireAjoute(id, volume));
  }
}
