import {call, put, takeEvery, select} from 'redux-saga/effects';
import {CHARGE_LIVRES, livresCharges, demarreChargement} from '../actions/chargementActions';

export default function* chargeLivres(livresApi) {

  yield takeEvery(CHARGE_LIVRES, charge);

  function* charge() {
    const status = yield select(({alexandria:{livres:{status}}}) => status);
    if(status === 'loaded') {
      return;
    }
    yield put(demarreChargement());
    const livres = yield call(livresApi.tous);
    yield put(livresCharges(livres));
  }
}
