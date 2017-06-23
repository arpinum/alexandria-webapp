import t from 'tcomb';

const ExemplaireAjoute = t.struct({
  id: t.String
}, 'ExemplaireAjoute');

function ExemplairesApi(axios) {

  const ajoute = (isbn) => axios.post('/alexandria/ma/bibliotheque/exemplaires', {isbn})
    .then(({data}) => ExemplaireAjoute(data));

  return {ajoute};
}

export default ExemplairesApi;
