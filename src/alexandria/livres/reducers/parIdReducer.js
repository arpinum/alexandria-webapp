import {LIVRES_CHARGES} from '../actions/chargementActions';

const defaultState = {};

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LIVRES_CHARGES:
      return payload.reduce((acc, e) => {
        acc[e.isbn] = e;
        return acc;
      }, {});
    default:
      return state;
  }
};
