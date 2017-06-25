import {call, put, takeEvery} from 'redux-saga/effects';
import {AJOUTE_EXEMPLAIRE, exemplaireAjoute} from '../actions/ajoutExemplaireActions';

export function* ajoute(exemplairesApi, {payload: volume}) {
  const {id} = yield call(exemplairesApi.ajoute, volume.isbn);
  yield put(exemplaireAjoute(id, volume));
}

export default function* ajoutExemplaireSaga(exemplairesApi) {
  yield takeEvery(AJOUTE_EXEMPLAIRE, ajoute, exemplairesApi);
}
