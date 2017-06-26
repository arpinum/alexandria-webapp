function EmpruntsApi(axios) {

  const sort = ({id: idExemplaire, idBibliotheque}) => axios.post('/alexandria/lecteur/emprunts', {
    idExemplaire,
    idBibliotheque,
  }).then(({data}) => data);

  const rend = ({id: idExemplaire, idBibliotheque}) =>
    axios.delete(`/alexandria/lecteur/emprunts/${idBibliotheque}:${idExemplaire}`)
      .then(({data})=>data);

  return {
    sort,
    rend
  };
}

export default EmpruntsApi;
