import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import {ResumeLivre} from '../api/types';
import {Badge, Card, CardBlock, CardText, CardTitle, Collapse, Button} from 'reactstrap';

class Livre extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    const l = this.props.livre;
    return (
      <Card>
        <CardBlock>
          <CardTitle>{l.titre}<Badge pill>{l.nombre}</Badge> </CardTitle>
        </CardBlock>
        <img src={l.image} alt="" style={{
          width: '100%',
          height: 'auto'
        }}/>
        <Button color="primary" onClick={this.toggle.bind(this)}>{this.state.collapse ? 'Cacher': 'Description'}</Button>
        <Collapse isOpen={this.state.collapse}>
          <CardBlock>
            <CardText>{l.description}</CardText>
          </CardBlock>
        </Collapse>
      </Card>);
  }

}

Livre.propTypes = propTypes(t.struct({
  livre: ResumeLivre,
}));

export default Livre;
