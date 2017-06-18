import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';

const RouteAvecAuth = ({children, authentifie, ...rest}) => (
  <Route {...rest} render={() => (
    authentifie ?
      children
      : (
      <Redirect to="/"/>
    )
  )}/>
);

RouteAvecAuth.propTypes = propTypes(t.struct({
  component: t.Any,
  authentifie: t.Boolean,
}), {strict: false});

export default RouteAvecAuth;
