import React from "react"

function Saudacao({ nome }) {
  function gerarSaudacao(algumNome){
    return (`Olá ${algumNome}, tudo bem?`)
  }
  return (
    <div>
      <p>{gerarSaudacao}</p>
    </div>
  )
}
export default Saudacao