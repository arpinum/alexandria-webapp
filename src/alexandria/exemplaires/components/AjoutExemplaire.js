import React, {PureComponent} from 'react';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';
import RechercheVolumes from '../../volumes/components/RechercheVolumesContainer';

class AjoutExemplaire extends PureComponent {

  render() {
    return (
      <div>
        <h1>Nouvel exemplaire</h1>
        <RechercheVolumes/>
      </div>
    );
  }
}

AjoutExemplaire.propTypes = propTypes(t.struct({}), {strict: false});

export default AjoutExemplaire;
