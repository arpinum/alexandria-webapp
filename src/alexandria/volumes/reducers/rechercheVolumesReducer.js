import {VOLUMES_TROUVES} from '../actions/rechercheVolumesActions';

const defaultState = [];
export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case VOLUMES_TROUVES:
      return payload;
    default:
      return defaultState;
  }
};
