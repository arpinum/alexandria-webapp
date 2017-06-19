import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import Livre from './Livre';
import {Col, Row} from 'reactstrap';
import {ListeResumes} from '../api/types';
import NavigationButton from '../../../app/components/NavigationButton';

class Livres extends PureComponent {

  componentDidMount() {
    this.props.charge();
  }

  render() {
    const lignes = this.props.livres.map((l) =>
      <Col xs="4" key={l.isbn}>
        <Livre livre={l}/>
      </Col>,
    );
    return (
      <div>
        <h1>Livres
          <NavigationButton to="/nouvelexemplaire">Déposer un exemplaire</NavigationButton>
        </h1>
        <Row>
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
