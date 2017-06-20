import {call, put, takeLatest} from 'redux-saga/effects';
import {RECHERCHE_VOLUMES, volumesTrouves} from '../actions/rechercheVolumesActions';

export default function* rechercheVolumes(livresApi) {

  yield takeLatest(RECHERCHE_VOLUMES, recherche);

  function* recherche({payload:termes}) {
    const volumes = yield call(livresApi.rechercheVolumes, termes);
    yield put(volumesTrouves(volumes));
  }
}
