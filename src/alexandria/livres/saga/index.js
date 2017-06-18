import {fork} from 'redux-saga/effects';
import chargeLivresSaga from './chargeLivresSaga';

export default function (history, livresApi) {
  return function*() {
    yield fork(chargeLivresSaga, history, livresApi);
  };
}
