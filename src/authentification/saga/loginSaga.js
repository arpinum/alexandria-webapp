import {LOGIN} from '../actions';
import {call, take} from 'redux-saga/effects';

export default (authApi) => {

  return function* loginSaga() {
    const {payload} = yield take(LOGIN);
    const token = yield call(authApi.connecte, payload);
    return token;
  };
};

