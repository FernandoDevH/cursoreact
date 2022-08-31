import React from "react";
import { useState } from 'react'

function Condicional() {
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
    console.log({ email }, { userEmail })
  }

  function limparEmail() {
    setUserEmail('')
  }

  return (
    <div>
      <h2>Cadastre seu e-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail aqui"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input type="submit" onClick={enviarEmail} value="Enviar" />
        {userEmail && ( // && significa if e nesse codigo diz: se o email do usuário for preenchido imprima o cogido abaixo.
          <div>
            <p>
              o E-mail do usuário é:{userEmail}
            </p>
            <input
              type="button"
              value="Limpar e-mail"
              onClick={limparEmail}
            />
          </div>
          )
        }
          
      </form>
    </div>
  )
}

export default Condicional