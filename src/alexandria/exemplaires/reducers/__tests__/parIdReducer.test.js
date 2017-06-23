import {exemplairesTrouves} from '../../actions/rechercheExemplaireActions';
import reducer from '../parIdReducer';

describe('parIdReducer', () => {

  it('retourne un état par défaut', () => {
    const newState = reducer(undefined, {type: 'init'});

    expect(newState).toEqual({});
  });

  it('ajoute les exemplaires', () => {
    const action = exemplairesTrouves([{id: 'test', isbn:'isbn'}]);

    const newState = reducer({}, action);

    expect(newState).toEqual({test: {id: 'test', isbn:'isbn'}});
  });
});
