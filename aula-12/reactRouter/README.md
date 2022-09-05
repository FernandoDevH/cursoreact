# React Router

- O React Router é um pacote para mudança de URLs da aplicação, podemos assim acessar outras views sem o page reload, trocando apeas uma parte do layout da aplicação, ou seja, o que mda de view para view. Precisamos instalar este pacote no pojeto e também realizar algumas mudanças em como o App é estruturado.

No **App.js** temos:

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

onde:
**Router** envolve a aplicação
**Routes** diz quais areas serão alteradas
**Route** decreta qual a rota, qual componente representa e qual o patch 

E no **NavBar.module.css** temos:

import { Link } from "react-router-dom"

**Link** é aonde é redirecionado para as paginas que temos no projeto 

### Códigos usados:

- npm install react-router-dom
 - faz o roteamento das URLs
