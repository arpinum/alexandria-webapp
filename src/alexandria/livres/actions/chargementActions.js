export const CHARGE_LIVRES = 'CHARGE_LIVRES';

export const chargeLivres = () => ({type: CHARGE_LIVRES});

export const LIVRES_CHARGES = 'LIVRES_CHARGES';

export const livresCharges = (livres) => ({type:LIVRES_CHARGES, payload:livres});
