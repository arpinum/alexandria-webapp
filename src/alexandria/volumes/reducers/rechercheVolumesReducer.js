import {VOLUMES_TROUVES, DEMARRE_RECHERCHE} from '../actions/rechercheVolumesActions';

const defaultState = [];
export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case VOLUMES_TROUVES:
      return payload;
    case DEMARRE_RECHERCHE:
      return defaultState;
    default:
      return state;
  }
};
