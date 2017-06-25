import rejoueLoginSaga, {selector} from '../rejoueLoginSaga';
import {put, select} from 'redux-saga/effects';
import {loginReussi} from '../../actions';

describe('rejoueLoginSaga', () => {

  it('utilises un selector retournant le token et le lecteur', () => {
    const résultat = selector({app: {token: 't', lecteur: 'l'}});

    expect(résultat).toEqual({
      token: 't',
      lecteur: 'l',
    });
  });

  it('sélectionne depuis le store', () => {
    const value = rejoueLoginSaga().next().value;

    expect(value).toEqual(select(selector));
  });

  it('rejoue le login si token', () => {
    const saga = rejoueLoginSaga();
    saga.next();

    const value = saga.next({token: 't', lecteur: 'l'}).value;

    expect(value).toEqual(put(loginReussi('t', 'l')));
  });

  it('ne fais rien si pas de token', () => {
    const saga = rejoueLoginSaga();
    saga.next();

    const value = saga.next({});

    expect(value.done).toBe(true);
  });
});