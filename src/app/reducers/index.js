import {LOGIN} from '../../authentification/actions';

const defaultState = {};

const appReducer = (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN:
      return {lecteur: payload};
    default:
      return state;
  }
};

export default appReducer;

