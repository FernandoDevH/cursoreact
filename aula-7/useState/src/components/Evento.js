import React from 'react'
export default Evento


function Evento({numero}){
    function meuEvento(){
        alert (`Fui ativado ${numero}`)
    }
    return (
        <div>
            <p>clique para disparar um evento: </p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}