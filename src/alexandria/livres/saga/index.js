import {call, takeEvery, put} from 'redux-saga/effects';
import {CHARGE_LIVRES, livresCharges} from '../actions';

export default function (history, livresApi) {

  return function*() {
    yield takeEvery(CHARGE_LIVRES, charge);
    history.push('/livres');
  };

  function* charge() {
    const livres = yield call(livresApi.tous);
    yield put(livresCharges(livres));
  }
}
