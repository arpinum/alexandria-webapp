import {fork} from 'redux-saga/effects';
import chargeLivresSaga from './chargeLivresSaga';
import LivresApi from '../api/LivresApi';

export default function (history, axios) {
  return function*() {
    yield fork(chargeLivresSaga, new LivresApi(axios));
    history.push('/app/livres');
  };
}
