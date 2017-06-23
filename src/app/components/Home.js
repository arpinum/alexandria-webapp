import React from 'react';
import ConnexionForm from './auth/ConnexionFormContainer';
import {Col, Jumbotron, Row} from 'reactstrap';

const Home = () =>
  (<Row>
    <Col>
      <Jumbotron>
        <h1 className="display-3">Alexandria</h1>
        <p className="lead">Une application pas nécessairement très utile</p>
      </Jumbotron>
    </Col>
    <Col>
      <ConnexionForm/>
    </Col>
  </Row>);

export default Home;

