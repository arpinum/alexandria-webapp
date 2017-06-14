import t from 'tcomb';

export const LOGIN = 'LOGIN';

export const Login = t.interface({
  email: t.String,
  prénom: t.String,
  nom: t.String,
}, 'Login');

export const login = (payload) => ({type: LOGIN, payload: Login(payload)});
