function EmpruntsApi(axios) {

  const sort = ({id: idExemplaire, idBibliotheque}) => axios.post('/alexandria/lecteur/emprunts', {
    idExemplaire,
    idBibliotheque,
  }).then(({data}) => data);

  return {
    sort,
  };
}

export default EmpruntsApi;
