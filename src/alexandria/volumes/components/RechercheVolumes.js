import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import {Button, FormGroup, Input, Label} from 'reactstrap';

class RechercheVolumes extends PureComponent {

  constructor(props) {
    super(props);
    this.recherche = this.recherche.bind(this);
    this.gereChangement = this.gereChangement.bind(this);
    this.state = {termes: ''};
  }

  recherche(evt) {
    evt.preventDefault();
    this.props.recherche(this.state.termes);
  }

  gereChangement(event) {
    this.setState({termes: event.target.value});
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Label for="termes">Rechercher par titre</Label>
          <Input
            type="text"
            value={this.state.termes}
            onChange={this.gereChangement}
            name="termes" id="termes"
            placeholder="Tout ce qui vous passe par la tête"/>
        </FormGroup>
        <Button type="submit" color="primary" onClick={this.recherche}>Rechercher</Button>
      </div>
    );
  }
}

RechercheVolumes.propTypes = propTypes(t.struct({
  recherche: t.Function
}), {strict: false});

export default RechercheVolumes;
