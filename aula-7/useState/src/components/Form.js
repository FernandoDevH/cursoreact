import React from 'react'
import { useState } from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault() 
        alert (`Olá, seu cadastro foi efetuado com sucesso!`)
    }

    const[name, setName] = useState()

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome aqui" onChange={(even)=> setName(even.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input type="passoword" id="senha" name="senha" placeholder="Digite sua senha aqui"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form