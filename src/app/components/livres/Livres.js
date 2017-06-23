import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import Livre from './Livre';
import {Card, CardBlock, CardTitle, Col, Row} from 'reactstrap';
import {ListeResumes} from '../../../alexandria/livres/api/types';
import NavigationButton from '../nav/NavigationButton';

class Livres extends PureComponent {

  componentDidMount() {
    this.props.charge();
  }

  render() {
    const lignes = this.props.livres.map((l) =>
      <Col md="4" key={l.isbn}>
        <Livre livre={l}/>
      </Col>,
    );
    return (
      <div>
        <h1>Livres</h1>
        <Row>
          <Col md="4">
            <Card>
              <CardBlock>
                <CardTitle>Déposer le votre </CardTitle>
                <NavigationButton to="/nouvelexemplaire" color="primary">+</NavigationButton>
              </CardBlock>
            </Card>
          </Col>
          {lignes}
        </Row>
      </div>
    );
  }
}

Livres.propTypes = propTypes(t.struct({
  livres: ListeResumes,
  status: t.String,
  charge: t.Func,
}), {
  strict: false,
});

export default Livres;
