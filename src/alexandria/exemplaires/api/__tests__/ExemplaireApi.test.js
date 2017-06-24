import ExemplairesApi from '../ExemplairesApi';
import {ListeResumeExemplaire} from '../types';

describe('ExemplairesApi', () => {

  let api, axios;

  beforeEach(() => {
    axios = {
      post: jest.fn(() => Promise.resolve({data: {id: ''}})),
      get: jest.fn(() => Promise.resolve({data:[]}))
    };
    api = new ExemplairesApi(axios);
  });

  describe('ajout', () => {

    it('demande à ajouter un exemplaire', () => {
      api.ajoute('isbn');

      expect(axios.post).toHaveBeenCalledWith('/alexandria/lecteur/exemplaires', {
        isbn: 'isbn'
      });
    });

    it('retourne les données', (done) => {
      const exemplaire = {
        id: 'id'
      };
      axios.post.mockImplementation(() => Promise.resolve({data: exemplaire}));

      const result = api.ajoute('isbn');

      result.then((data) => {
        expect(data).toEqual(exemplaire);
        done();
      });
    });
  });

  describe('liste pour isbn', () => {

    it('demande la liste pour un isbn', () => {
      api.liste('isbn');

      expect(axios.get).toHaveBeenCalledWith('/alexandria/livres/isbn/exemplaires');
    });

    it('retourne les exemplaires', (done) => {
      const exemplaires = [{
        id: 'id',
        disponible: true,
        idBibliotheque: 'bibli',
        isbn: 'isbn',
        lecteur: {
          id: 'lecteur',
          prenom: 'jb',
          nom: 'dusse'
        }
      }];
      axios.get.mockImplementation(() => Promise.resolve({data: exemplaires}));

      const résultat = api.liste('isbn');

      résultat.then((liste) => {
        expect(liste).toEqual(ListeResumeExemplaire(exemplaires));
        done();
      });
    });
  });
});
