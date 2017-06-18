import {LOGIN} from '../actions';
import {call, take} from 'redux-saga/effects';
import AuthentificationApi from '../api/AuthentificationApi';

export default (axios) => {
  const authApi = AuthentificationApi(axios);
  return function* loginSaga() {
    const {payload} = yield take(LOGIN);
    const token = yield call(authApi.connecte, payload);
    return token;
  };
};

