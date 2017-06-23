export const CHARGE_LIVRES = 'CHARGE_LIVRES';

export const chargeLivres = () => ({type: CHARGE_LIVRES});

export const DEMARRE_CHARGEMENT_LIVRES = 'DEMARRE_CHARGEMENT_LIVRES';

export const demarreChargement = () => ({type: DEMARRE_CHARGEMENT_LIVRES});

export const LIVRES_CHARGES = 'LIVRES_CHARGES';

export const livresCharges = (livres) => ({type:LIVRES_CHARGES, payload:livres});
