import {EXEMPLAIRES_TROUVES} from '../actions/rechercheExemplaireActions';

const defaultState = {};

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case EXEMPLAIRES_TROUVES: {
      return payload.reduce((acc, e) => {
        acc[e.isbn] = e;
        return acc;
      }, {});
    }
    default:
      return state;
  }
};

