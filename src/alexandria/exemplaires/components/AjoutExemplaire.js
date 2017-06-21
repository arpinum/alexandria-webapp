import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import RechercheVolumes from '../../volumes/components/RechercheVolumesContainer';

class AjoutExemplaire extends PureComponent {

  constructor(props) {
    super(props);
    this.selection = this.selection.bind(this);
  }

  selection(volume) {
    this.props.ajoute(volume);
  }

  render() {
    return (
      <div>
        <h1>Nouvel exemplaire</h1>
        <RechercheVolumes onSelection={this.selection}/>
      </div>
    );
  }
}

AjoutExemplaire.propTypes = propTypes(t.struct({
  ajoute: t.Function,
}), {strict: false});

export default AjoutExemplaire;
