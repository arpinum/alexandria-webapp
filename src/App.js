import React, {Component} from 'react';
import {Banner, Footer, Heading} from 'rebass';
import './App.css';
import Navbar from './app/components/Navbar';
import ConnexionForm from './authentification/components/ConnexionFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Banner
          style={{
            minHeight: '75vh',
            paddingTop: 48,
            backgroundAttachment: 'fixed',
          }}

          backgroundImage='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Inside_Bibliotheca_Alexandrina_%282007-05-031%29.jpg/1024px-Inside_Bibliotheca_Alexandrina_%282007-05-031%29.jpg'
        ><Heading size={1} big>
          <span>Alexandria</span>
        </Heading>
          <ConnexionForm></ConnexionForm>
        </Banner>
        <Footer>
          Arpinum FTW
        </Footer>
      </div>
    );
  }
}

export default App;
