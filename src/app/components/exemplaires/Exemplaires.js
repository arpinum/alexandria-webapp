import React, {PureComponent} from 'react';
import t from 'tcomb';
import {propTypes} from 'tcomb-react';
import {ResumeLivre} from '../../../alexandria/livres/api/types';
import ButtonRetour from '../nav/ButtonRetour';
import {Col, Row} from 'reactstrap';
import Livre from '../livres/Livre';

class Exemplaires extends PureComponent {

  componentDidMount() {
    this.props.recherche(this.props.livre.isbn);
  }

  render() {
    const livre = this.props.livre;
    return (<div>
      <Row>
        <Col xs="2">
          <ButtonRetour/>
        </Col>
        <Col xs="auto">
          <h1>Exemplaires</h1>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Livre livre={livre} avecDescription/>
        </Col>
        <Col sm="auto">
          <h2>La liste</h2>
        </Col>
      </Row>
    </div>);
  }
}

Exemplaires.propTypes = propTypes(t.struct({
  livre: ResumeLivre,
  recherche: t.Function
}), {
  strict: false
});

export default Exemplaires;

