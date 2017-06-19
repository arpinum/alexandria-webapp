import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';

const RouteAvecAuth = ({component: Component, authentifie, ...rest}) => (
  <Route {...rest} render={(props) => (
    authentifie ? (
      <Component {...props}/>
    )
      : (
      <Redirect to="/"/>
    )
  )}/>
);

RouteAvecAuth.propTypes = propTypes(t.struct({
  component: t.Function,
  authentifie: t.Boolean,
}), {strict: false});

export default RouteAvecAuth;
