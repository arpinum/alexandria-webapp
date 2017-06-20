import {spawn} from 'redux-saga/effects';
import livresSaga from './livres/saga';
import volumesSaga from './volumes/saga';

export default function*(history, axios) {
  yield spawn(livresSaga, history, axios);
  yield spawn(volumesSaga, axios);
}
