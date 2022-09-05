# Eventos

- Os eventos de React são os mesmos eventos do DOm. ou seja, temos eventos para responder a um click. O evento é atrelado a uma tag que irá executá-lo, geralmente m método é atribuído ao evento e esse metodo deve ser criado no componente. 
### Forma de criar o evento

-Cria-se um arquivo .js
- codigo do arquivo: function nomeDaFuncion(){
    insira aqui a ação('Insira aqui o texto')
}

function nomeDoArquivo(){
    return (
        <div>
        <form onSubmit={nomeDaFunction}>
        <div>
        <input type="text" placeholder="digite aqui" />
        </div>
        <div>
        <input type="submit" value="nome do botao" />
        </div>
        </form>
        </div>
    )
}

export default nomeDoArquivo

- tem a opção de colocar um preventDefault() que para o comportamento normal do html, travando submit, fazendo com que a página não seja recarregada, e deixando "salvo" o que está escrito no console, muito usado em formulários.
  - exemplo:
  - function nomeDaFunction(e){
    e.preventDefault()
    insira aqui a ação ('Insira aqui o texto')
  }
   - Obs: o **e** entre () pode ser qualquer letra ou palavra