import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import {Badge, Card, CardBlock, CardText, CardTitle, Col} from 'reactstrap';

class Livres extends PureComponent {

  componentDidMount() {
    this.props.charge();
  }

  render() {
    const lignes = this.props.livres.map((l) =>
      <Col xs="6" key={l.isbn}>
        <Card key={l.isbn}>
          <CardBlock>
            <CardTitle>{l.titre}<Badge pill>{l.nombre}</Badge> </CardTitle>
          </CardBlock>
          <img src={l.image} alt=""/>
          <CardBlock>
            <CardText>{l.description}</CardText>
          </CardBlock>
        </Card>
      </Col>,
    );
    return (
      <div>
        <h1>Livres</h1>
        {lignes}
      </div>
    );
  }
}

Livres.propTypes = propTypes(t.struct({
  livres: t.Array,
  status: t.String,
  charge: t.Func,
}), {
  strict: false,
});

export default Livres;
