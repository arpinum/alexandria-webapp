import {spawn} from 'redux-saga/effects';
import chargeLivresSaga from './chargeLivresSaga';
import LivresApi from '../api/LivresApi';

export default function*(history, axios) {
  const livresApi = new LivresApi(axios);

  yield spawn(chargeLivresSaga, livresApi);
  history.push('/livres');
}
