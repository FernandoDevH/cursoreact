import React from 'react'

function cadastrarUsuario(e){
    e.preventDefault() 
    console.log ('Olá ${Cadastro efetuado com sucesso!')
}


function Form(){
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome aqui" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form