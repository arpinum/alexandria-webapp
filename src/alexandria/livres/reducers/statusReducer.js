import {CHARGE_LIVRES, LIVRES_CHARGES} from '../actions/chargementActions';

const defaultState = 'hiddle';

export default (state = defaultState, {type}) => {
  switch (type) {
    case CHARGE_LIVRES:
      return 'loading';
    case LIVRES_CHARGES:
      return 'hiddle';
    default:
      return state;
  }
};
