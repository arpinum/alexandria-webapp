import {call, put, takeEvery} from 'redux-saga/effects';
import {CHARGE_LIVRES, livresCharges} from '../actions/chargementActions';

export default function* chargeLivres(livresApi) {

  yield takeEvery(CHARGE_LIVRES, charge);

  function* charge() {
    const livres = yield call(livresApi.tous);
    yield put(livresCharges(livres));
  }
}
