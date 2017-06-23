import {DEMARRE_CHARGEMENT_LIVRES, LIVRES_CHARGES} from '../actions/chargementActions';

const defaultState = 'hiddle';

export default (state = defaultState, {type}) => {
  switch (type) {
    case DEMARRE_CHARGEMENT_LIVRES:
      return 'loading';
    case LIVRES_CHARGES:
      return 'loaded';
    default:
      return state;
  }
};
