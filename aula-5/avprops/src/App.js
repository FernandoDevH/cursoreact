import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Frase from './components/Frase'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TESTE</h1>
        <Frase />
        <Frase />
       <List />
      </div>
    );
  }
}

export default App;
