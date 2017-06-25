import React from 'react';
import {Button, Col, ListGroupItem, Row} from 'reactstrap';
import {ResumeExemplaire} from '../../../alexandria/exemplaires/api/types';
import t from 'tcomb';
import {propTypes} from 'tcomb-react';

const Exemplaire = ({exemplaire: e, surSortiDemande: sort, surRetourDemande: rend}) => (
  <ListGroupItem key={e.id} color={e.disponible ? 'success' : 'danger'}>
    <Row>
      <Col>
        {e.disponible ? <Button block color="primary" className="float-right" onClick={() => sort(e)}>Emprunter</Button>
          : <Button block className="float-right" color="primary" onClick={() => rend(e)}>Rendre</Button>}
      </Col>
      <Col>{`${e.lecteur.prenom} ${e.lecteur.nom}`}</Col>
    </Row>
  </ListGroupItem>);

Exemplaire.propTypes = propTypes(t.struct({
  exemplaire: ResumeExemplaire,
  surSortiDemande: t.Function,
  surRetourDemande: t.Function
}));

export default Exemplaire;
