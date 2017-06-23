import t from 'tcomb';
import {ListeResumeExemplaire} from './types';

const ExemplaireAjoute = t.struct({
  id: t.String
}, 'ExemplaireAjoute');

function ExemplairesApi(axios) {

  const ajoute = isbn => axios.post('/alexandria/ma/bibliotheque/exemplaires', {isbn})
    .then(({data}) => ExemplaireAjoute(data));

  const liste = isbn => axios.get(`/alexandria/livres/${isbn}/exemplaires`)
    .then(({data}) => ListeResumeExemplaire(data));

  return {
    ajoute,
    liste
  };
}

export default ExemplairesApi;
