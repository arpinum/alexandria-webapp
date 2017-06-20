import t from 'tcomb';

export const Volume = t.struct({
  isbn: t.String,
  image: t.String,
  titre: t.String,
  description: t.maybe(t.String),
}, 'Volume');

export const ListeVolumes = t.list(Volume);
