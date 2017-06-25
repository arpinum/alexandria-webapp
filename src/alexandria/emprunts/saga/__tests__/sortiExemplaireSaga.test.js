import mainSaga, {sort, rend} from '../sortiExemplaireSaga';
import {exemplaireSorti, SORT_EXEMPLAIRE, REND_EXEMPLAIRE, exemplaireRendu} from '../../actions/sortiExemplairesActions';
import {call, put, takeEvery} from 'redux-saga/effects';

describe('sortiExemplaireSaga', () => {

  let api;

  beforeEach(() => {
    api = {
      sort: jest.fn(() => ({})),
      rend: ()=>({})
    };
  });

  describe('main saga', () => {

    it('lance sort', () => {
      const value = mainSaga(api).next().value;

      expect(value).toEqual(takeEvery(SORT_EXEMPLAIRE, sort, api));
    });

    it('lance rend', () => {
      const saga = mainSaga(api);
      saga.next();

      const value = saga.next().value;

      expect(value).toEqual(takeEvery(REND_EXEMPLAIRE, rend, api));
    });
  });

  describe('sort saga', () => {

    it('appelle l\'api', () => {
      const exemplaire = {};

      const value = sort(api, {payload: exemplaire}).next().value;

      expect(value).toEqual(call(api.sort, exemplaire));
    });

    it('dispatch sur réussite', () => {
      const exemplaire = {id:'test'};
      const saga = sort(api, {payload: exemplaire});
      saga.next();

      const value = saga.next().value;

      expect(value).toEqual(put(exemplaireSorti(exemplaire)));
    });

  });

  describe('rend saga', () => {
    it('appelle l\'api', () => {
      const exemplaire = {};

      const value = rend(api, {payload:exemplaire}).next().value;

      expect(value).toEqual(call(api.rend, exemplaire));
    });

    it('dispatch une action sur réussite', () => {
      const exemplaire = {};
      const saga = rend(api, {payload:exemplaire});
      saga.next();

      const value = saga.next({}).value;

      expect(value).toEqual(put(exemplaireRendu(exemplaire)));
    });
  });
});
