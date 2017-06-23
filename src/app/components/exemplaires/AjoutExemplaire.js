import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import RechercheVolumes from '../volumes/RechercheVolumesContainer';
import ButtonRetour from '../nav/ButtonRetour';
import {Col, Row} from 'reactstrap';

class AjoutExemplaire extends PureComponent {

  constructor(props) {
    super(props);
    this.selection = this.selection.bind(this);
  }

  selection(volume) {
    this.props.ajoute(volume);
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="2">
            <ButtonRetour/>
          </Col>
          <Col xs="auto">
            <h1>Nouvel exemplaire</h1>
          </Col>
        </Row>
        <RechercheVolumes onSelection={this.selection}/>
      </div>
    );
  }
}

AjoutExemplaire.propTypes = propTypes(t.struct({
  ajoute: t.Function,
}), {strict: false});

export default AjoutExemplaire;
