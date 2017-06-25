import loginSaga from '../loginSaga';
import {call, take, put} from 'redux-saga/effects';
import {LOGIN, loginReussi} from '../../actions';

describe('loginSaga', () => {

  let api = {connecte: () => ({})};

  it('attend une action de login', () => {
    const value = loginSaga(api).next().value;

    expect(value).toEqual(take(LOGIN));
  });

  it('demande la connexion', () => {
    const saga = loginSaga(api);
    saga.next();
    const identifiants = {};

    const value = saga.next({payload:identifiants}).value;

    expect(value).toEqual(call(api.connecte, identifiants));
  });

  it('notifie la réussite', () => {
    const saga = loginSaga(api);
    saga.next();
    saga.next({});
    const résultatConnexion={
      lecteur:'lecteur',
      token:'token'
    };

    const value = saga.next(résultatConnexion).value;

    expect(value).toEqual(put(loginReussi('token', 'lecteur')));
  });
});