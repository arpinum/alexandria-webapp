import t from 'tcomb';

export const ResumeLivre = t.struct({
  isbn: t.String,
  nombre: t.Integer,
  image: t.String,
  titre: t.String,
  description: t.String,
}, 'ResumeLivre');

export const ListeResumes = t.list(ResumeLivre);
