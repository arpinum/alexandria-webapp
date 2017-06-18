import {CHARGE_LIVRES, LIVRES_CHARGES} from '../../actions/chargementActions';

import reducer from '../statusReducer';

describe('Livres statusReducer', () => {

  it('retourne un état par défaut', () => {
    const newState = reducer(undefined, {type: 'init'});

    expect(newState).toEqual('hiddle');
  });

  it('change le status au chargement', () => {
    const newState = reducer('', {type: CHARGE_LIVRES});

    expect(newState).toEqual('loading');
  });

  it('change le status à la fin du chargement', () => {
    const newState = reducer('', {type: LIVRES_CHARGES});

    expect(newState).toEqual('hiddle');
  });
});