import React from 'react';
import Home from './app/components/Home';
import Livres from './alexandria/livres/components/LivresContainer';
import AjoutExemplaire from './alexandria/exemplaires/components/AjoutExemplaire';
import {Route, Router} from 'react-router-dom';
import {propTypes} from 'tcomb-react';
import RouteAvecAuth from './authentification/components/RouteAvecAuthContainer';
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
