import t from 'tcomb';

export const Action = t.interface({
  type: t.String,
  payload: t.Dict,
}, 'Action');
