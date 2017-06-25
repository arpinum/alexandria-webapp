import rechercheExemplairesSaga, {recherche} from '../rechercheExemplairesSaga';
import {RECHERCHE_EXEMPLAIRES, exemplairesTrouves} from '../../actions/rechercheExemplaireActions';
import {takeEvery, call, put} from 'redux-saga/effects';

describe('rechercheExemplairesSaga', () => {

  let api;

  beforeEach(() => {
    api = {liste: jest.fn(()=>({}))};
  });

  describe('main', () => {

    it('déclanche la recherche', () => {
      const value = rechercheExemplairesSaga(api).next().value;

      expect(value).toEqual(takeEvery(RECHERCHE_EXEMPLAIRES, recherche, api));
    });
  });

  describe('recherche', () => {

    it('fait la recherche', () => {
      const value = recherche(api, {payload:'isbn'}).next().value;

      expect(value).toEqual(call(api.liste, 'isbn'));
    });

    it('dispatch le résultat', () => {
      const saga = recherche(api, {});
      saga.next();
      const exemplaires = [{id:'test'}];

      const value = saga.next(exemplaires).value;

      expect(value).toEqual(put(exemplairesTrouves(exemplaires)));
    });
  });
});
