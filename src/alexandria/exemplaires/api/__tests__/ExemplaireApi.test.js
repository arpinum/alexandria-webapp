import ExemplairesApi from '../ExemplairesApi';

describe('ExemplairesApi', () => {

  let api, axios;

  beforeEach(() => {
    axios = {
      post: jest.fn(() => Promise.resolve({}))
    };
    api = new ExemplairesApi(axios);
  });

  describe('ajout', () => {

    it('demande à ajouter un exemplaire', () => {
      api.ajoute('isbn');

      expect(axios.post).toHaveBeenCalledWith('/alexandria/ma/bibliotheque/exemplaires', {
        isbn: 'isbn'
      });
    });

    it('retourne les données', (done) => {
      const exemplaire = {
        idBibliotheque: 'id',
        isbn: 'isbn'
      };
      axios.post.mockImplementation(() => Promise.resolve({data: exemplaire}));

      const result = api.ajoute('isbn');

      result.then((data) => {
        expect(data).toEqual(exemplaire);
        done();
      });
    });
    ;
  });
});
