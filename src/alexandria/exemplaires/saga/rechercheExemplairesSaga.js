import {call, put, takeEvery} from 'redux-saga/effects';
import {exemplairesTrouves, RECHERCHE_EXEMPLAIRES} from '../actions/rechercheExemplaireActions';

export default function* rechercheExemplairesSage(api) {
  yield takeEvery(RECHERCHE_EXEMPLAIRES, recherche);

  function* recherche({payload: isbn}) {
    const exemplaires = yield call(api.liste, isbn);
    yield put(exemplairesTrouves(exemplaires));
  }
}
