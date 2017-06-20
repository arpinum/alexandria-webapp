import LivresApi from '../LivresApi';

describe('LivresApi', () => {
  let api, get;

  beforeEach(() => {
    get = jest.fn(() => new Promise(() => {
    }));
    api = new LivresApi({
      get,
    });
  });

  it('demande les livres', () => {
    api.tous();

    expect(get).toHaveBeenCalledWith('/alexandria/livres');
  });

  it('vérifie les livres', (done) => {
    const data = [{
      isbn: 'isbn',
      titre: 'titre',
      description: 'des',
      image: 'http://',
      nombre: 3
    }];
    get.mockImplementation(() => Promise.resolve({data}));

    return api.tous().then((result) => {
      expect(result).toEqual([{
        isbn: 'isbn',
        titre: 'titre',
        description: 'des',
        image: 'http://',
        nombre: 3
      }]);
      done();
    });
  });

});
