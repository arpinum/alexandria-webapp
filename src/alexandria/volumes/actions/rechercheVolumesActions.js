export const DEMARRE_RECHERCHE = 'DEMARRE_RECHERCHE';

export const demarreRecherche = () => ({
  type: DEMARRE_RECHERCHE
});

export const RECHERCHE_VOLUMES = 'RECHERCHE_VOLUME';

export const rechercheVolume = termes => ({
  type: RECHERCHE_VOLUMES,
  payload: termes
});

export const VOLUMES_TROUVES = 'VOLUMES_TROUVES';

export const volumesTrouves = volumes => ({
  type: VOLUMES_TROUVES,
  payload: volumes
});

