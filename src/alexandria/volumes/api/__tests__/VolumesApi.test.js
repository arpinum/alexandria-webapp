import VolumesApi from '../VolumesApi';

describe('VolumesApi', () => {
  let api, get;

  beforeEach(() => {
    get = jest.fn(() => new Promise(() => {
    }));
    api = new VolumesApi({
      get,
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
