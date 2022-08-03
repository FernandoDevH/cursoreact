import React from 'react'
import logo from './logo.svg';
import './App.css';
import SayMyName  from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App(){
  const nome= "Maria"
  return (
    <div className="app">
      <SayMyName nome="matheus" />
      <SayMyName nome={nome}/>
      <Pessoa nome="Fernando" idade="28" profissao="Programador Front-End" foto="https://via.placeholder.com/150"/>

    </div>
  )
}

export default App;
