import chargeLivreSaga, {charge, selector} from '../chargeLivresSaga';
import {put, select, takeEvery, call} from 'redux-saga/effects';
import {CHARGE_LIVRES, demarreChargement, livresCharges} from '../../actions/chargementActions';

describe('chargeLivresSaga', () => {

  let api;

  beforeEach(() => {
    api = {tous: jest.fn(()=>({}))};
  });

  describe('main', () => {

    it('lance la saga sur la bonne action', () => {
      const value = chargeLivreSaga(api).next().value;

      expect(value).toEqual(takeEvery(CHARGE_LIVRES, charge, api));
    });
  });

  describe('charge saga', () => {

    it('demande si les livres sont déjà chargés', () => {
      const value = charge(api).next().value;

      expect(value).toEqual(select(selector));
    });

    it('utilise un selecteur qui retourne le status', () => {
      const status = selector({alexandria: {livres: {status: 'loaded'}}});

      expect(status).toEqual('loaded');
    });

    it('arrête la saga si déjà chargé', () => {
      const saga = charge(api);
      saga.next();

      const value = saga.next('loaded');

      expect(value.done).toBe(true);
    });

    it('démarre le chargement sinon', () => {
      const saga = charge(api);
      saga.next();

      const value = saga.next('hiddle').value;

      expect(value).toEqual(put(demarreChargement()));
    });

    it('charge les livres depuis api', () => {
      const saga = charge(api);
      saga.next();
      saga.next('hiddle');

      const value = saga.next().value;

      expect(value).toEqual(call(api.tous));
    });

    it('dispatch les livres', () => {
      const saga = charge(api);
      saga.next();
      saga.next('hiddle');
      saga.next();
      const livres = [];

      const value = saga.next(livres).value;

      expect(value).toEqual(put(livresCharges(livres)));
    });
  });
});