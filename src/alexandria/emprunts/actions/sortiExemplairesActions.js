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

export const REND_EXEMPLAIRE = 'REND_EXEMPLAIRE';

export const rendExemplaire = exemplaire => ({
  type: REND_EXEMPLAIRE,
  payload: exemplaire
});

export const EXEMPLAIRE_RENDU = 'EXEMPLAIRE_RENDU';

export const exemplaireRendu = exemplaire => ({
  type: EXEMPLAIRE_RENDU,
  payload: exemplaire
});
