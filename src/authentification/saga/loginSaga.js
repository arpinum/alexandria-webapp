import AuthentificationApi from '../api/AuthentificationApi';
import {LOGIN} from '../actions';
import {take, call} from 'redux-saga/effects';

export default (axios) => {
  const authApi = new AuthentificationApi(axios);

  return function* loginSaga() {
    const {payload} = yield take(LOGIN);
    const token = yield call(authApi.connecte, payload);
    return token;
  };
};

