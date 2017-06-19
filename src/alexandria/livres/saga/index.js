import {all, fork} from 'redux-saga/effects';
import chargeLivresSaga from './chargeLivresSaga';
import rechercheVolumesSaga from './rechercheVolumesSaga';
import LivresApi from '../api/LivresApi';

export default function (history, axios) {
  const livresApi = new LivresApi(axios);
  return function*() {
    yield all([
      fork(chargeLivresSaga, livresApi),
      fork(rechercheVolumesSaga, livresApi)
    ]);
    history.push('/livres');
  };
}
