import React from 'react';
import Home from './app/components/Home';
import Livres from './alexandria/components/Livres';
import {Router, Route} from 'react-router-dom';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';

const AppRouter = ({history}) => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/livres" component={Livres}/>
    </div>
  </Router>);

AppRouter.propTypes = propTypes(t.interface({
  history: t.Any
}));

export default AppRouter;
