import t from 'tcomb';

export const LOGIN = 'LOGIN';

export const Login = t.interface({
  email: t.String,
  prénom: t.String,
  nom: t.String,
}, 'Login');

export const login = (payload) => ({type: LOGIN, payload: Login(payload)});

export const LOGIN_REUSSI = 'LOGIN_REUSSI';

export const loginReussi = (token, lecteur) => ({type: LOGIN_REUSSI, payload:{token, lecteur}});
