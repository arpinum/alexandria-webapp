export const RECHERCHE_EXEMPLAIRES = 'RECHERCHE_EXEMPLAIRES';

export const rechercheExemplaires = (isbn) => ({type: RECHERCHE_EXEMPLAIRES, payload: isbn});

export const EXEMPLAIRES_TROUVES = 'EXEMPLAIRES_TROUVES';

export const exemplairesTrouves = (exemplaires) => ({
  type: EXEMPLAIRES_TROUVES,
  payload: exemplaires
});
