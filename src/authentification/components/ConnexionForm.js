import React, {PureComponent} from 'react';
import {Button, Panel} from 'rebass';
import {Box} from 'reflexbox';
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
    return (<Panel theme="info">
      <form style={{color: 'black'}} onSubmit={this.login.bind(this)}>
        <tform.form.Form ref={c => {
          this.form = c;
        }} type={Login}>
        </tform.form.Form>
        <Box py={2}>
          <Button type="submit" big>
            Connexion
          </Button>
        </Box>
      </form>
    </Panel>);
  }
}

ConnexionForm.propTypes = propTypes(t.struct({
  login: t.Function,
}));

export default ConnexionForm;
