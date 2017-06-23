import React from 'react';
import {withRouter} from 'react-router';
import {Button} from 'reactstrap';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';

const ButtonRetour = ({history, size}) => (
  <Button color="info" size={size} onClick={() => history.goBack()}>
    Retour
  </Button>
);

ButtonRetour.propTypes = propTypes(t.struct({
  history: t.Any,
  size: t.maybe(t.String),
}), {strict: false});

export default withRouter(ButtonRetour);
