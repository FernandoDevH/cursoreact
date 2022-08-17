import React from 'react';
import PropTypes from 'prop-types';
function Item({marca,ano_lancamento}){
    return(
        <div>
        <li>
            {marca} - {ano_lancamento}
        </li>
        </div>
    )

}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}
Item.defaultProps = {
    marca: 'Favor insira a marca',
    ano_lancamento: 'Favor insira o ano de lançamento',

}
export default Item