import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {propTypes} from 'tcomb-react';
import t from 'tcomb';

const RouteAvecAuth = ({children}) => children;

RouteAvecAuth.propTypes = propTypes(t.struct({
  children: t.Any,
  authentifie: t.Boolean,
}));

export default RouteAvecAuth;
