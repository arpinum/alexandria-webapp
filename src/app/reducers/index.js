import {LOGIN_REUSSI} from '../../authentification/actions';

const defaultState = {};

const appReducer = (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_REUSSI:
      return payload;
    default:
      return state;
  }
};

export default appReducer;

