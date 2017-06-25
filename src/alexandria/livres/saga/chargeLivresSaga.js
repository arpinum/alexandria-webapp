import {call, put, select, takeEvery} from 'redux-saga/effects';
import {CHARGE_LIVRES, demarreChargement, livresCharges} from '../actions/chargementActions';

export const selector = ({alexandria: {livres: {status}}}) => status;

export function* charge(livresApi) {
  const status = yield select(selector);
  if (status === 'loaded') {
    return;
  }
  yield put(demarreChargement());
  const livres = yield call(livresApi.tous);
  yield put(livresCharges(livres));
}

export default function* chargeLivres(livresApi) {
  yield takeEvery(CHARGE_LIVRES, charge, livresApi);
}
