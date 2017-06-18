import reducer from '../parIdReducer';
import {livresCharges} from '../../actions/chargementActions';

describe('Livres parId reducer', () => {

  it('retourne l\'état par défaut', () => {
    const newState = reducer(undefined, {type: 'init'});

    expect(newState).toEqual({});
  });

  it('range les livres par id', () => {
    const newState = reducer({}, livresCharges([
      {
        isbn: 'isbn',
        titre: 'titre',
        nombre: 8,
      },
    ]));

    expect(newState).toEqual({
      isbn: {
        isbn: 'isbn',
        titre: 'titre',
        nombre: 8,
      },
    });
  });
});