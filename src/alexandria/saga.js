import {spawn} from 'redux-saga/effects';
import livresSaga from './livres/saga';
import volumesSaga from './volumes/saga';
import exemplairesSaga from './exemplaires/saga';
import empruntsSaga from './emprunts/saga';

export default function*(axios) {
  yield spawn(livresSaga, axios);
  yield spawn(volumesSaga, axios);
  yield spawn(exemplairesSaga, axios);
  yield spawn(empruntsSaga, axios);
}
