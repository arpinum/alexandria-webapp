import t from 'tcomb';

export const Livre = t.struct({
  isbn: t.String,
  image: t.String,
  titre: t.String,
  description: t.maybe(t.String),
}, 'Livre');

export const ResumeLivre = Livre.extend({
  nombre: t.Integer,
}, 'ResumeLivre');

export const ListeResumes = t.list(ResumeLivre);

export const ListeLivres = t.list(Livre);
