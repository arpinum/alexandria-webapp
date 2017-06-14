import React, {PureComponent} from 'react';
import {Button, Card, CardBlock, CardTitle, Form} from 'reactstrap';
import {Login} from '../actions';
import tform from 'tcomb-form';
import t from 'tcomb';
import {propTypes} from 'tcomb-react';

class ConnexionForm extends PureComponent {

  login(evt) {
    evt.preventDefault();
    this.props.login(this.form.getValue());
  }

  render() {
    return (<Card>
      <CardBlock>
      <CardTitle>Connexion</CardTitle>
        <Form onSubmit={this.login.bind(this)}>
          <tform.form.Form ref={c => {
            this.form = c;
          }} type={Login}>
          </tform.form.Form>

          <Button type="submit" color="primary">
            Connexion
          </Button>

        </Form></CardBlock>
    </Card>);
  }
}

ConnexionForm.propTypes = propTypes(t.struct({
  login: t.Function,
}));

export default ConnexionForm;
