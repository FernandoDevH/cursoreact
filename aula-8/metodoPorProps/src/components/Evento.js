import React from 'react'
import Button from './evento/Button'
import Buttonn from './evento/Buttonn'


function Evento() {
    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }
    function segundoEvento() {
        console.log(`Ativando o segundo evento!`)
    }
    return (
        <div>
            <p>clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
            <Buttonn event={segundoEvento} text="Terceiro evento" />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento