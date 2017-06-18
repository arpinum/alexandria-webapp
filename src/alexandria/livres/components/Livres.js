import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import {Badge, Table} from 'reactstrap';

class Livres extends PureComponent {

  componentDidMount() {
    this.props.charge();
  }

  render() {
    const lignes = this.props.livres.map((l) =>
      <tr key={l.isbn}>
        <td>{l.isbn}</td>
        <td>{l.titre}</td>
        <td><Badge pill>{l.nombre}</Badge></td>
      </tr>,
    );
    return (
      <div>
        <h1>Livres</h1>
        <Table>
          <thead>
          <tr>
            <td>ISBN</td>
            <td>Titre</td>
            <td>En stock</td>
          </tr>
          </thead>
          <tbody>
          {lignes}
          </tbody>
        </Table>
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
