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

  describe('recherche', () => {

    it('recherche un livre', () => {
      api.rechercheVolumes('termes');

      expect(get).toHaveBeenCalledWith('/alexandria/recherche', {
        params: {
          q: 'termes'
        }
      });
    });

    it('vérifie les livres recherchés', (done) => {
      const data = [{
        isbn: 'isbn',
        titre: 'titre',
        description: 'des',
        image: 'http://'
      }];
      get.mockImplementation(() => Promise.resolve({data}));

      return api.rechercheVolumes().then((result) => {
        expect(result).toEqual([{
          isbn: 'isbn',
          titre: 'titre',
          description: 'des',
          image: 'http://',
        }]);
        done();
      });
    });
  });


});
