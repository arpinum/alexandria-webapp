function ExemplairesApi(axios) {

  const ajoute = (isbn) => axios.post('/alexandria/ma/bibliotheque/exemplaires', {isbn})
    .then(({data}) => data);

  return {ajoute};
}

export default ExemplairesApi;
