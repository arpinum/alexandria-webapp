import {call, put, takeEvery} from 'redux-saga/effects';
import {exemplaireSorti, SORT_EXEMPLAIRE} from '../actions/sortiExemplairesActions';

export function* sort(exemplairesApi, {payload: exemplaire}) {
  yield call(exemplairesApi.sort, exemplaire);
  yield put(exemplaireSorti(exemplaire));
}

export default function* sortiExemplaireSaga(exemplairesApi) {
  yield takeEvery(SORT_EXEMPLAIRE, sort, exemplairesApi);
}
