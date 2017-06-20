import reducer from '../rechercheVolumesReducer';
import {volumesTrouves} from '../../actions/rechercheVolumesActions';

describe('rechercheVolumesReducer', () => {

  it('retourne un état par défaut', () => {
    const newState = reducer(undefined, {type: 'init'});

    expect(newState).toEqual([]);
  });

  it('récupère la liste des volumes', () => {
    const volumes = [{
      isbn:'test'
    }];
    const newState = reducer(undefined, volumesTrouves(volumes));

    expect(newState).toEqual(volumes);
  });
});
