import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import Livre from './Livre';
import {Col, Row} from 'reactstrap';

class Livres extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
    this.props.charge();
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    const lignes = this.props.livres.map((l) =>
      <Col xs="4" key={l.isbn}>
        <Livre livre={l}/>
      </Col>,
    );
    return (
      <div>
        <h1>Livres</h1>
        <Row>
          {lignes}
        </Row>
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
