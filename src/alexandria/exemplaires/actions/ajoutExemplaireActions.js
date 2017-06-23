export const AJOUTE_EXEMPLAIRE = 'AJOUTE_EXEMPLAIRE';

export const ajouteExemplaire = volume => ({
  type: AJOUTE_EXEMPLAIRE,
  payload: volume
});

export const EXEMPLAIRE_AJOUTE = 'EXEMPLAIRE_AJOUTE';

export const exemplaireAjoute = (id, volume) => ({
  type: EXEMPLAIRE_AJOUTE,
  payload: {id, volume}
});
