import appReducer from '../index';
import {LOGIN} from '../../../authentification/actions';

describe('AppReducer', () => {

  it('retourne un état par défaut', () => {
    const defaultState = appReducer(undefined, {type: 'init'});

    expect(defaultState).toEqual({});
  });

  it('ajoute le lecteur', () => {
    const newState = appReducer({}, {type: LOGIN, payload: {nom: 'dusse'}});

    expect(newState).toEqual({lecteur: {nom: 'dusse'}});
  });
});