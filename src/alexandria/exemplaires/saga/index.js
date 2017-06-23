import ExemplairesApi from '../api/ExemplairesApi';
import ajouteExemplaireSaga from './ajoutExemplaireSaga';
import rechercheExemplairesSaga from './rechercheExemplairesSaga';
import {spawn} from 'redux-saga/effects';

export default function*(axios) {
  const api = new ExemplairesApi(axios);
  yield spawn(ajouteExemplaireSaga, api);
  yield spawn(rechercheExemplairesSaga, api);
}
