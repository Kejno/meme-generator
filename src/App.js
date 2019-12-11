import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import MemeGenerator from './MemeGenerator/MemeGenerator.js';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <MemeGenerator />
      </div>
    );

  }
}

export default App;
