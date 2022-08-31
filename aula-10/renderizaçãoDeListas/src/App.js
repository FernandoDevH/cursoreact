import React from 'react'
import './App.css'
import OutraLista from './components/evento/OutraLista'

function App() {
  const meusItens = ['React', 'Vue', 'Angular']
  const teste = document.getElementById('teste')


  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <form>
        <input id="teste" type="text" placeholder='escreva seu nome' />
      </form>
    </div>
  )
}

export default App