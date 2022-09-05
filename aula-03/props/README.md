# Aula 3 O que são props?
---
- O nome Props vem de propriedade
- As **props** são valores passados para componentes; um componente filho recebe uma propriedade de um componente pai.
- Podemos deixá-los **dinâmicos**, ou seja, **mudando a execução por causa do valor a prop
- O valor é **passado como um atributo** na chamada do componente
- E precisa ser **resgatado dentro de uma propriedade/argumento** chamada props na função de definição do componente
- As props são somente de **leitura**
---
## Observações:
 - Ao criar um novo arquivo .js e importar no app.js estava dando o erro: **React' must be in scope when using JSX  react/react-in-jsx-scope**, procurei em alguns sites e não encontrei nenhuma solução. Ao fazer diversos testes, consegui corrigir resolver importando **import React from 'react'** no novo aquivo.

### Comandos usados:
---
**Função de exemplo**
- function Pessoa( {nome, idade, foto, profissao}){

    return(
        <div>
            <img src={foto}/>
            <h2> Nome: {nome}</h2>
            <p> Idade: {idade} </p>
            <p> Profissão: {profissao} </p>
        </div>
    )
}

export default Pessoa
  - 
- ****
  - 