import React from 'react';
import Home from './app/components/Home';
import Livres from './alexandria/components/Livres';
import {Route, Router} from 'react-router-dom';
import RouteAvecAuth from './authentification/components/RouteAvecAuthContainer';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';

const AppRouter = ({history}) => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>
      <RouteAvecAuth>
        <Route path="/livres" component={Livres}/>
      </RouteAvecAuth>
    </div>
  </Router>);

AppRouter.propTypes = propTypes(t.interface({
  history: t.Any
}));

export default AppRouter;
