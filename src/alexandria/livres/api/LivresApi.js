import t from 'tcomb';

const ResumeLivre = t.struct({
  isbn: t.String,
  nombre: t.Integer,
  titre: t.String,
  description: t.String,
}, 'ResumeLivre');

export default function LivresApi(axios) {

  const tous = () => axios.get('/alexandria/livres')
    .then(({data}) => data);

  return {
    tous,
  };
}
