import {call, put, takeEvery} from 'redux-saga/effects';
import {exemplairesTrouves, RECHERCHE_EXEMPLAIRES} from '../actions/rechercheExemplaireActions';

export function* recherche(api, {payload: isbn}) {
  const exemplaires = yield call(api.liste, isbn);
  yield put(exemplairesTrouves(exemplaires));
}

export default function* rechercheExemplairesSage(api) {
  yield takeEvery(RECHERCHE_EXEMPLAIRES, recherche, api);
}
