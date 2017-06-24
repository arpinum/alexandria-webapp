export const SORT_EXEMPLAIRE = 'SORT_EXEMPLAIRE';

export const sortExemplaire = exemplaire => ({
  type: SORT_EXEMPLAIRE,
  payload: exemplaire,
});

export const EXEMPLAIRE_SORTI = 'EXEMPLAIRE_SORTI';

export const exemplaireSorti = exemplaire => ({
  type: EXEMPLAIRE_SORTI,
  payload: exemplaire,
});