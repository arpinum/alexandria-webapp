import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import {ResumeLivre} from '../../../alexandria/livres/api/types';
import {Badge, Card, CardImg, CardText, CardTitle} from 'reactstrap';
import NavigationButton from '../nav/NavigationButton';

class Livre extends PureComponent {

  render() {
    const l = this.props.livre;
    return (
      <Card block>
        <CardTitle>{l.titre}<Badge pill>{l.nombre}</Badge> </CardTitle>
        <CardImg top src={l.image} alt="" style={{
          width: '100%',
          height: 'auto'
        }}/>
        {this.props.avecDescription && <CardText>{l.description}</CardText>}
        {this.props.avecLien &&
        <NavigationButton to={`/livres/${l.isbn}`} color="primary">Exemplaires</NavigationButton>}
      </Card>);
  }

}

Livre.propTypes = propTypes(t.struct({
  livre: ResumeLivre,
  avecDescription: t.maybe(t.Boolean),
  avecLien: t.maybe(t.Boolean)
}));

export default Livre;
