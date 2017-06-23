import {LIVRES_CHARGES} from '../actions/chargementActions';
import {EXEMPLAIRE_AJOUTE} from '../../exemplaires/actions/ajoutExemplaireActions';
import _ from 'lodash';

const defaultState = {};

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LIVRES_CHARGES: {
      return payload.reduce((acc, e) => {
        acc[e.isbn] = e;
        return acc;
      }, {});
    }
    case EXEMPLAIRE_AJOUTE: {
      const {volume} = payload;
      return {...state, [volume.isbn]: {...volume, nombre: _.get(state, [volume.isbn, 'nombre'], 0) + 1}};
    }
    default:
      return state;
  }
};
