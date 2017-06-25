import EmpruntsApi from '../EmpruntsApi';

describe('EmpruntsApi', () => {

  let api, axios;

  beforeEach(() => {
    axios = {
      post: jest.fn(() => Promise.resolve({data: {id: ''}})),
      delete: jest.fn(() => Promise.resolve({}))
    };
    api = new EmpruntsApi(axios);
  });

  describe('emprunt', () => {

    it('demande la sortie du livre', () => {
      const exemplaire = {
        id: 'id',
        idBibliotheque: 'bibli',
      };
      api.sort(exemplaire);

      expect(axios.post).toHaveBeenCalledWith('/alexandria/lecteur/emprunts', {
        idExemplaire: 'id',
        idBibliotheque: 'bibli',
      });
    });
  });

  it('retourne un emprunt', (done) => {
    const payload = {
      truc: 'test',
    };
    axios.post.mockImplementation(() => Promise.resolve({data: payload}));

    const retour = api.sort({});

    retour.then((data) => {
      expect(data).toEqual(payload);
      done();
    });
  });

  it('demande de rendre un exemplaire', () => {
    const exemplaire = {
      id: 'id',
      idBibliotheque: 'biblio'
    };

    api.rend(exemplaire);

    expect(axios.delete).toHaveBeenCalledWith('/alexandria/lecteur/emprunts/biblio:id');
  });
});
