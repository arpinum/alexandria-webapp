import React from 'react';
import {withRouter} from 'react-router';
import {Button} from 'reactstrap';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';

const NavigationButton = ({to, history, color, size, active, children}) => (
  <Button color={color} active={active} size={size} onClick={() => history.push(to)}>
    {children}
  </Button>
);

NavigationButton.propTypes = propTypes(t.struct({
  to: t.String,
  history: t.Any,
  color: t.maybe(t.String),
  active: t.maybe(t.Boolean),
  size: t.maybe(t.String),
  children: t.maybe(t.Any),
}), {strict: false});

export default withRouter(NavigationButton);
