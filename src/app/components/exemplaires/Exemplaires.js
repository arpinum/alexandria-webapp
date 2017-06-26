import React, {PureComponent} from 'react';
import t from 'tcomb';
import {propTypes} from 'tcomb-react';
import {ResumeLivre} from '../../../alexandria/livres/api/types';
import {ListeResumeExemplaire} from '../../../alexandria/exemplaires/api/types';
import ButtonRetour from '../nav/ButtonRetour';
import {Col, ListGroup, Row} from 'reactstrap';
import Livre from '../livres/Livre';
import Exemplaire from './Exemplaire';

class Exemplaires extends PureComponent {

  componentDidMount() {
    this.props.recherche(this.props.livre.isbn);
  }

  render() {
    const livre = this.props.livre;
    const exemplaires = this.props.exemplaires.map(e =>
      <Exemplaire
        key={e.id}
        exemplaire={e}
        surSortiDemande={() => this.props.sort(e)}
        surRenduDemande={() => this.props.rend(e)}
      />,
    );
    return (<div>
      <Row>
        <Col xs="2">
          <ButtonRetour/>
        </Col>
        <Col xs="auto">
          <h2>Exemplaires</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Livre livre={livre} avecDescription/>
        </Col>
        <Col>
          <ListGroup style={{
            width: '100%',
          }}>
            {exemplaires}
          </ListGroup>
        </Col>
      </Row>
    </div>);
  }
}

Exemplaires.propTypes = propTypes(t.struct({
  livre: ResumeLivre,
  recherche: t.Function,
  sort: t.Function,
  rend: t.Function,
  exemplaires: ListeResumeExemplaire,
}), {
  strict: false,
});

export default Exemplaires;

