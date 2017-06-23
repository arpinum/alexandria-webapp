import React from 'react';
import Home from './app/components/Home';
import Livres from './app/components/livres/LivresContainer';
import AjoutExemplaire from './app/components/exemplaires/AjoutExemplaireContainer';
import {Route, Router} from 'react-router-dom';
import {propTypes} from 'tcomb-react';
import RouteAvecAuth from './app/components/auth/RouteAvecAuthContainer';
import t from 'tcomb';

const AppRouter = ({history}) => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>

      <RouteAvecAuth path="/livres" component={Livres}/>
      <RouteAvecAuth path="/nouvelexemplaire" component={AjoutExemplaire}/>

    </div>
  </Router>);

AppRouter.propTypes = propTypes(t.interface({
  history: t.Any,
}));

export default AppRouter;
