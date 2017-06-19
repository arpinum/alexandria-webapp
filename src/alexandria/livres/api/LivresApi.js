import t from 'tcomb';

const ResumeLivre = t.struct({
  isbn: t.String,
  nombre: t.Integer,
  image: t.String,
  titre: t.String,
  description: t.String,
}, 'ResumeLivre');

const ListeResumes = t.list(ResumeLivre);

export default function LivresApi(axios) {

  const tous = () => axios.get('/alexandria/livres')
    .then(({data}) => ListeResumes(data));

  return {
    tous,
  };
}
