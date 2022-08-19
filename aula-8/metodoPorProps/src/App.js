import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testando eventos</h1>
        <Evento numero= "" />
        <Form />
      </div>
    );
  }
}

export default App;
