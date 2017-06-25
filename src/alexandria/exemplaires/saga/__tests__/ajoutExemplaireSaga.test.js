import ajouteExemplaireSaga, {ajoute} from '../ajoutExemplaireSaga';
import {AJOUTE_EXEMPLAIRE, exemplaireAjoute} from '../../actions/ajoutExemplaireActions';
import {call, put, takeEvery} from 'redux-saga/effects';

describe('ajout exemplaire saga', () => {

  let api;

  beforeEach(() => {
    api = {ajoute: jest.fn(() => ({}))};
  });

  describe('main', () => {

    it('écoute l\'action d\'ajout', () => {
      const value = ajouteExemplaireSaga(api).next().value;

      expect(value).toEqual(takeEvery(AJOUTE_EXEMPLAIRE, ajoute, api));
    });

  });

  describe('ajoute', () => {

    it('appelle ajout avec volume', () => {
      const volume = {isbn: 'isbn'};

      const value = ajoute(api, {payload: volume}).next().value;

      expect(value).toEqual(call(api.ajoute, volume.isbn));
    });

    it('dispatch la bonne action sur réussite', () => {
      const volume = {};
      const saga = ajoute(api, {payload: volume});
      saga.next();

      const value = saga.next({id:'id'}).value;

      expect(value).toEqual(put(exemplaireAjoute('id', volume)));
    });
  });

});
