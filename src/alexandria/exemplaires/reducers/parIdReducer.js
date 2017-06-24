import {EXEMPLAIRES_TROUVES} from '../actions/rechercheExemplaireActions';
import {EXEMPLAIRE_SORTI} from '../../emprunts/actions/sortiExemplairesActions';

const defaultState = {};

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case EXEMPLAIRES_TROUVES: {
      return payload.reduce((acc, e) => {
        acc[e.id] = e;
        return acc;
      }, {});
    }
    case EXEMPLAIRE_SORTI: {
      return {
        ...state, [payload.id]: {
          ...state[payload.id],
          disponible: false,
        },
      };
    }
    default:
      return state;
  }
};

