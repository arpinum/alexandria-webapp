import {ListeLivres, ListeResumes} from './types';

export default function LivresApi(axios) {

  const tous = () => axios.get('/alexandria/livres')
    .then(({data}) => ListeResumes(data));

  const rechercheVolumes = (termes) => axios.get('/alexandria/recherche', {
    params: {q: termes}
  }).then(({data}) => ListeLivres(data));

  return {
    tous,
    rechercheVolumes
  };
}
