import {ListeResumes} from './types';

export default function LivresApi(axios) {

  const tous = () => axios.get('/alexandria/livres')
    .then(({data}) => ListeResumes(data));

  return {
    tous,
  };
}
