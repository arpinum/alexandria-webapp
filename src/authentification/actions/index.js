import t from 'tcomb';

const LOGIN = 'LOGIN';

export const Login = t.struct({
  email: t.String,
  prénom: t.String,
  nom: t.String,
}, 'Login');

export const login = (payload) => ({type: LOGIN, payload: Login(payload)});
