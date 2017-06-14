import React, {Component} from 'react';
import {Container, Row, Col, Jumbotron} from 'reactstrap';
import './App.css';
import Navbar from './app/components/Navbar';
import ConnexionForm from './authentification/components/ConnexionFormContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Container style={{
          paddingTop: 10,
        }}>
          <Row>
            <Col>
              <Jumbotron>
                <h1 className="display-3">Alexandria</h1>
                <p className="lead">Une application pas nécessairement très utile</p>
              </Jumbotron>
            </Col>
            <Col>
              <ConnexionForm/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
