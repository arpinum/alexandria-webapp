import {spawn} from 'redux-saga/effects';
import rechercheVolumesSaga from './rechercheVolumesSaga';
import VolumesApi from '../api/VolumesApi';

export default function*(axios) {
  const volumesApi = new VolumesApi(axios);
  yield spawn(rechercheVolumesSaga, volumesApi);
}
