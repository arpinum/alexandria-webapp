import {spawn} from 'redux-saga/effects';
import chargeLivresSaga from './chargeLivresSaga';
import rechercheVolumesSaga from '../../volumes/saga/rechercheVolumesSaga';
import LivresApi from '../api/LivresApi';

export default function (history, axios) {
  const livresApi = new LivresApi(axios);

  return function*() {
    yield spawn(chargeLivresSaga, livresApi);
    yield spawn(rechercheVolumesSaga, livresApi);
    history.push('/livres');
  };
}
