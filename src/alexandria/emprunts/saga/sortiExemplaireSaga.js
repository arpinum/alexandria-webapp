import {call, put, takeEvery} from 'redux-saga/effects';
import {exemplaireSorti, exemplaireRendu, SORT_EXEMPLAIRE, REND_EXEMPLAIRE} from '../actions/sortiExemplairesActions';

export function* sort(exemplairesApi, {payload: exemplaire}) {
  yield call(exemplairesApi.sort, exemplaire);
  yield put(exemplaireSorti(exemplaire));
}

export function* rend(exemplairesApi, {payload: exemplaire}) {
  yield call(exemplairesApi.rend, exemplaire);
  yield put(exemplaireRendu(exemplaire));

}

export default function* sortiExemplaireSaga(exemplairesApi) {
  yield takeEvery(SORT_EXEMPLAIRE, sort, exemplairesApi);
  yield takeEvery(REND_EXEMPLAIRE, rend, exemplairesApi);
}
