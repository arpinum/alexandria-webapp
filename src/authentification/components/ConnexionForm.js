import React from 'react';
import {Input, Panel, PanelHeader, Text} from 'rebass';

const ConnexionForm = () => (

  <Panel theme="info">
    <PanelHeader>
      <Text>Connexion qui shine</Text>
    </PanelHeader>
    <form style={{color:'black'}}>
      <Input label="Email" name="email"/>
      <Input label="Prénom" name="prénom"/>
      <Input label="Nom" name="nom"/>
    </form>
  </Panel>
);

export default ConnexionForm;