import reducer from '../parIdReducer';
import {livresCharges} from '../../actions/chargementActions';
import {exemplaireAjoute} from '../../../exemplaires/actions/ajoutExemplaireActions';

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

  it('ajoute le livre après ajout exemplaire', () => {
    const newState = reducer({}, exemplaireAjoute('id', {isbn: 'isbn', titre: 'test'}));

    expect(newState).toEqual({
      isbn: {
        isbn: 'isbn',
        titre: 'test',
        nombre: 1
      }
    });
  });

  it('incrémente le nombre de disponibles si existant', () => {
    const newState = reducer({isbn: {nombre: 1}}, exemplaireAjoute('id', {isbn: 'isbn', titre: 'test'}));

    expect(newState).toEqual({
      isbn: {
        isbn: 'isbn',
        titre: 'test',
        nombre: 2
      }
    });
  });
});
