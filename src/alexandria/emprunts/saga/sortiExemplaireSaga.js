import {call, put, takeEvery} from 'redux-saga/effects';
import {exemplaireSorti, SORT_EXEMPLAIRE} from '../actions/sortiExemplairesActions';

export default function* sortiExemplaireSaga(exemplairesApi) {
  yield takeEvery(SORT_EXEMPLAIRE, sort);

  function* sort({payload: exemplaire}) {
    yield call(exemplairesApi.sort, exemplaire);
    yield put(exemplaireSorti(exemplaire));
  }
}
