import React, {Component} from 'react';
import {Container} from 'reactstrap';
import './App.css';
import Navbar from './app/components/nav/Navbar';
import AppRouter from './Router';
import {propTypes} from 'tcomb-react';
import t from 'tcomb';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Container style={{
          paddingTop: 10,
        }}>
          <AppRouter history={this.props.history}/>
        </Container>
      </div>
    );
  }
}

App.propTypes = propTypes(t.struct({
  history: t.Any
}));

export default App;
