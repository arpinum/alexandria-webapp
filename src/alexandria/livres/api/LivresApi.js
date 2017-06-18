import t from 'tcomb';

const ResumeLivre = t.interface({
  isbn: t.String,
  nombre: t.Integer,
  titre: t.String,
}, 'ResumeLivre');

export default function LivresApi(axios) {

  const tous = () => axios.get('/alexandria/livres')
    .then(({data}) => data.map(ResumeLivre));

  return {
    tous,
  };
}
