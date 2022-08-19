import React from 'react'
function Buttonn(teste) {
    return (
        <div>
            <button onClick={teste.event}>{teste.text} </button>
            </div>
    )
}

export default Buttonn