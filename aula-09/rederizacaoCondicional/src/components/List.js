import Item from './Item'
import React from 'react';
function List(){
    return(
    <div>
    <h1>Minha Lista</h1>
    <ul>
    <Item marca={1992} ano_lancamento={1994} />
    <Item marca="fiat" ano_lancamento={1964} />
    <Item />
    </ul>
    </div>
    )
}

export default List