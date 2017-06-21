import ExemplairesApi from '../api/ExemplairesApi';
import ajouteExemplaireSaga from './ajoutExemplaireSaga';
import {spawn} from 'redux-saga/effects';

export default function*(axios) {
  const api = new ExemplairesApi(axios);
  yield spawn(ajouteExemplaireSaga, api);
}