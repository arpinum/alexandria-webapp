import {EXEMPLAIRES_TROUVES} from '../actions/rechercheExemplaireActions';
import {EXEMPLAIRE_SORTI, EXEMPLAIRE_RENDU} from '../../emprunts/actions/sortiExemplairesActions';

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
    case EXEMPLAIRE_RENDU: {
      return {
        ...state, [payload.id]: {
          ...state[payload.id],
          disponible: true,
        },
      };
    }
    default:
      return state;
  }
};

