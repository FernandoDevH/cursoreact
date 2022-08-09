import React, { Component } from 'react';
import './App.css';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Frase />
        <Frase />

        
        <Pessoa nome="fernando"/>
        <Frase />
      </div>
    );
  }
}

export default App;
