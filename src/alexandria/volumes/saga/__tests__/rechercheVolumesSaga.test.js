import rechercheVolumesSaga, {recherche} from '../rechercheVolumesSaga';
import {RECHERCHE_VOLUMES, volumesTrouves} from '../../actions/rechercheVolumesActions';
import {call, put, takeLatest} from 'redux-saga/effects';

describe('rechercheVolumesSaga', () => {

  let api;

  beforeEach(() => {
    api = {rechercheVolumes: () => ({})};
  });

  describe('main', () => {
    it('lance la saga sur la bonne action', () => {
      const value = rechercheVolumesSaga(api).next().value;

      expect(value).toEqual(takeLatest(RECHERCHE_VOLUMES, recherche, api));
    });
  });

  describe('recherche saga', () => {

    it('appelle la recherche avec les termes', () => {
      const value = recherche(api, {payload: 'termes'}).next().value;

      expect(value).toEqual(call(api.rechercheVolumes, 'termes'));
    });

    it('dispatch les les volumes', () => {
      const saga = recherche(api, {});
      saga.next();
      const volumes = [];

      const value = saga.next(volumes).value;

      expect(value).toEqual(put(volumesTrouves(volumes)));
    });
  });
});