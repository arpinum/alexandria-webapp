import React from 'react';
import Home from './app/components/Home';
import Livres from './alexandria/livres/components/LivresContainer';
import {Route, Router} from 'react-router-dom';
import {propTypes} from 'tcomb-react';
import RouteAvecAuth from './authentification/components/RouteAvecAuthContainer';
import t from 'tcomb';

const AppRouter = ({history}) => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>

      <RouteAvecAuth path="/app">
        <Route path="/app/livres" component={Livres}/>
      </RouteAvecAuth>

    </div>
  </Router>);

AppRouter.propTypes = propTypes(t.interface({
  history: t.Any,
}));

export default AppRouter;
