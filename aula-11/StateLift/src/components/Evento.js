import React from 'react'
import Button from './evento/Button'

function Evento() {
    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }
    function segundoEvento(teste) {
        console.log(`Ativando o segundo evento!`)
    }
    return (
        <div>
            <p>clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro evento" />
       </div>
    )
}

export default Evento