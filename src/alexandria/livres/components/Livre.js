import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import {ResumeLivre} from '../api/types';
import {Badge, Button, Card, CardBlock, CardTitle, Popover, PopoverContent} from 'reactstrap';

class Livre extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
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
        <Button color="primary" id={`des_${l.isbn}`} onClick={this.toggle}>Description</Button>
        <Popover placement="left" isOpen={this.state.collapse} target={`des_${l.isbn}`} toggle={this.toggle}>
          <PopoverContent>{l.description}</PopoverContent>
        </Popover>
      </Card>);
  }

}

Livre.propTypes = propTypes(t.struct({
  livre: ResumeLivre,
}));

export default Livre;
