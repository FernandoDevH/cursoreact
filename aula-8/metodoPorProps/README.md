# Métodos por props

-   Os métodos também podem ser passados por props, ou seja, um componente filho pode ativar o método do seu pai. Vamos acessar o método por meio de um evento, a sintaxe é a mesma de uma props de dados: **props.meuEvento**
---
### vantagens:
    - se o layout for componentizado, pode ter um componente que não seja o pai que execute o filho, e sim o filho que execute o pai, exemplo um site de ecommerce 