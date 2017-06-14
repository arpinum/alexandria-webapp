import jwtDecode from 'jwt-decode';

export default function AuthentificationApi(axios) {

  const connecte = (params) => axios.post('/identite/tokens', params)
    .then(({data}) => {
      let tokenDecode = jwtDecode(data);
      return {
        token: data,
        lecteur: {
          prenom: tokenDecode.prenom,
          nom: tokenDecode.nom,
          id: tokenDecode.sub
        },
      };
    });

  return {
    connecte,
  };
}
