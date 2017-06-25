import {exemplairesTrouves} from '../../actions/rechercheExemplaireActions';
import {exemplaireSorti, exemplaireRendu} from '../../../emprunts/actions/sortiExemplairesActions';
import reducer from '../parIdReducer';

describe('parIdReducer', () => {

  it('retourne un état par défaut', () => {
    const newState = reducer(undefined, {type: 'init'});

    expect(newState).toEqual({});
  });

  it('ajoute les exemplaires', () => {
    const action = exemplairesTrouves([{id: 'test', isbn: 'isbn'}]);

    const newState = reducer({}, action);

    expect(newState).toEqual({test: {id: 'test', isbn: 'isbn'}});
  });

  it('change la disponibilité sur sortie', () => {
    const newState = reducer({
      id: {
        id: 'id',
        disponible: true,
      },
    }, exemplaireSorti({id: 'id'}));

    expect(newState).toEqual({
      id: {
        id: 'id',
        disponible: false,
      },
    });
  });

  it('change la disponibilité sur rendu', () => {
    const newState = reducer({
      id: {
        id: 'id',
        disponible: false,
      },
    }, exemplaireRendu({id: 'id'}));

    expect(newState).toEqual({
      id: {
        id: 'id',
        disponible: true,
      },
    });
  });
});
