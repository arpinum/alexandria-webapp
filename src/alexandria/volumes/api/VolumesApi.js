import {ListeVolumes} from './types';

export default function VolumesApi(axios) {

  const rechercheVolumes = (termes) => axios.get('/alexandria/recherche', {
    params: {q: termes}
  }).then(({data}) => ListeVolumes(data));

  return {
    rechercheVolumes
  };
}
