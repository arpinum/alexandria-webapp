import mainSaga, {sort} from '../sortiExemplaireSaga';
import {exemplaireSorti, SORT_EXEMPLAIRE} from '../../actions/sortiExemplairesActions';
import {call, put, takeEvery} from 'redux-saga/effects';

describe('sortiExemplaireSaga', () => {

  let api;

  beforeEach(() => {
    api = {
      sort: jest.fn(() => ({})),
    };
  });

  describe('main saga', () => {

    it('lance sort', () => {
      const value = mainSaga(api).next().value;

      expect(value).toEqual(takeEvery(SORT_EXEMPLAIRE, sort, api));
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
});
