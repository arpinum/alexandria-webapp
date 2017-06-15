import AuthentificationApi from '../AuthentificationApi';

describe('AuthentificationApi', () => {
  let api, post;

  beforeEach(() => {
    post = jest.fn(() => new Promise(() => {
    }));
    api = new AuthentificationApi({
      post,
    });
  });

  it('demande un token', () => {
    let params = {
      nom: 'jb',
      prénom: 'dusse',
      email: 'jb@dusse',
    };

    api.connecte(params);

    expect(post).toHaveBeenCalledWith('/identite/tokens', params);
  });

  it('lie le token et retourne une version lisible', (done) => {
    const data = 'eyJ0eXAiOiJKV1QiLCJhbG' +
      'ciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicHJlbm9tI' +
      'joiSm9obiIsIm5vbSI6ImR1c3NlIn0.ciSn3s8G5XDwRiao96cIzkMNbDm4crrErZxN6Ko5DWA';
    post.mockImplementation(() => Promise.resolve({data}));

    return api.connecte({}).then((result) => {
      expect(result).toEqual({
        token: data,
        lecteur: {
          nom: 'dusse',
          prenom: 'John',
          id: '1234567890',
        },
      });
      done();
    });
  });
});