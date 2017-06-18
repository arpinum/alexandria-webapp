import {CHARGE_LIVRES, LIVRES_CHARGES} from '../actions';

const defaultState = {
  status: 'hiddle',
  parId: {},
};

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case CHARGE_LIVRES:
      return { ...state, status:'loading'};
    case LIVRES_CHARGES:
      return {status:'hiddle', parId: payload.reduce((acc, e) => {
        acc[e.isbn] = e;
        return acc;
      }, {})};
    default:
      return state;
  }
};
