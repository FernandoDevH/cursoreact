# TODAS AS INFORMAÇÕES QUE ACHEI PERTINENTES NO CURSO
---
ERROS, DIFICULDADES E SUAS SOLUÇÕES

## Aula 01
### Nessa aula foram abordados os seguintes temas:

---

- Como instalar as ferramentas necessárias para programar em React
- Primeiros passos com React
- Criando o primeiro arquivo com React
---
### Comandos usados:
---
- **sudo apt update**
  - Verifica se existem pacotes a serem atualizados.
- **sudo apt upgrade**
  - atualiza todos os pacotes.
- **sudo apt install nodejs**
  - faz a instalação do nodejs.
- **sudo apt install npm**
  - faz a instalação npm, tanto o node quanto o npm são arquivos necessários para trabalhar com react.
- **npx create-react-app NomeDoProjeto**
  - Instala/incializa os arquivos react.
- **npm start**
  - Inicializa o arquivo React.
---
  # Aula 2

### Nessa aula foram abordados os seguintes temas:
---
- Explicação sobre a o JSX.
- Criação de variáveis e funções
- Criação de img via variável
- É preciso que todos os elementos sejam criados dentro de um elemento pai, ex: div>h1^p

---
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
---
# Aula 4 Adicionando CSS
- O CSS pode ser adicinado de forma global na aplicação por meio do arquivo index.css por exemplo, 
porem é possível estiliza a nível de componentes utilizando o css modules para isso. Basta criar uma arquivo como: **nomedocomponente.module.css** e chamamr este CSS no componente

### Observações
- não pode criar classes com - traço
- é preciso criar ou com camelCase ou separado por _ 

- criação do arquivo (nome do arquivo): Frase.module.css
- conteudo do arquivo:
        .fraseContainer{
            COLOQUE AQUI SUAS TAGS CSS
        }
        .fraseContent {
            COLOQUE AQUI SUAS TAGS CSS
        }

        para importar o arquivo para um arquivo .js basta digitar o seguinte comando: import styles from 'caminhodoaquivo.module.css' que no nosso exemplo é import styles from './Frase.module.css'
        ai basta utilizar o className={styles.nomedaclasse} que no nosso caso pode ser tanto o fraseContainer ou fraseContent ficando assim:
        <div className={styles;fraseContainer}> </div>
        
        pode se utilizar também <div className="fraseContainer">