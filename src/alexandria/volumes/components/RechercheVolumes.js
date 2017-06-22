import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import {Button, FormGroup, Input, Label, Table} from 'reactstrap';
import {ListeVolumes} from '../api/types';

class RechercheVolumes extends PureComponent {

  constructor(props) {
    super(props);
    this.recherche = this.recherche.bind(this);
    this.gereChangement = this.gereChangement.bind(this);
    this.state = {termes: ''};
  }

  componentDidMount() {
    this.props.demarre();
  }

  recherche(evt) {
    if (evt.key === 'Enter') {
      this.props.recherche(this.state.termes);
    }
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
            placeholder="Tout ce qui vous passe par la tête"
            onKeyPress={this.recherche}/>
        </FormGroup>
        <Table striped={true}>
          <tbody>
          {this.props.volumes.map(v => (
            <tr key={v.isbn}>
              <td><img src={v.image} alt="Cover" style={{
                maxHeight: '100px',
                width: 'auto'
              }}/></td>
              <td>{v.titre}</td>
              <td><Button color="primary" onClick={()=>this.props.onSelection(v)}>Sélectionner</Button></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

RechercheVolumes.propTypes = propTypes(t.struct({
  demarre: t.Function,
  recherche: t.Function,
  volumes: ListeVolumes,
  onSelection: t.Function
}), {strict: false});

export default RechercheVolumes;
