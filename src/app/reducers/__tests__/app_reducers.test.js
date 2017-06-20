import appReducer from '../index';
import {LOGIN_REUSSI} from '../../../authentification/actions';

describe('AppReducer', () => {

  it('retourne un état par défaut', () => {
    const defaultState = appReducer(undefined, {type: 'init'});

    expect(defaultState).toEqual({});
  });

  it('ajoute le lecteur', () => {
    const newState = appReducer({}, {type: LOGIN_REUSSI, payload: {nom: 'dusse'}});

    expect(newState).toEqual({nom: 'dusse'});
  });
});
