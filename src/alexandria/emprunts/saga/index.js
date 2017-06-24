import sortiExemplaireSaga from './sortiExemplaireSaga';
import {spawn} from 'redux-saga/effects';
import EmpruntsApi from '../api/EmpruntsApi';

export default function*(axios) {
  const api = new EmpruntsApi(axios);
  yield spawn(sortiExemplaireSaga, api);
}