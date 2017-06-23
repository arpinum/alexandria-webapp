import t from 'tcomb';

export const Lecteur = t.struct({
  id: t.String,
  prenom: t.String,
  nom: t.String
}, 'Lecteur');

export const ResumeExemplaire = t.struct({
  id: t.String,
  idBibliotheque: t.String,
  isbn: t.String,
  disponible: t.Boolean,
  lecteur: Lecteur
}, 'RésuméÉxemplaire');

export const ListeResumeExemplaire = t.list(ResumeExemplaire, 'ListeRésuméExemplaire');
