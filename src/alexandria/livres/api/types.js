import t from 'tcomb';
import {Volume} from '../../volumes/api/types';

export const ResumeLivre = Volume.extend({
  nombre: t.Integer,
}, 'ResumeLivre');

export const ListeResumes = t.list(ResumeLivre);
