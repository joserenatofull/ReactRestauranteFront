import React from 'react';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'
const Cabecalho = () =>{

    const style = {
        'span' : {
            fontWeight: 'bold'}
        };
            

    
    return<>
    <header>
        <div className="container p-3">
{/*             p-3 = padding 3px
 */}        <div className="row">

        <div className="col-12 col-sm-6 col-md-10">

        <img src='/imagens/sep.jpg' alt='logo' title='Logo'/> <span style={style.span}></span>
        </div>

        <div className="col-12 col-sm-6 col-md-2">
        <div>Seja bem-vindo, <span style={style.span}>José</span>
        </div>
        <div> <i className='fas fa-shopping-cart'></i> | <span style={style.span}>Carrinho</span> (1)</div>
        <div> <i className='fas fa-user'></i> | Sair</div>
        </div>

        </div>
        <hr style={{backgroundImage: "linear-gradient(to right, grey, #019CAD)"
 ,height:'4px',}}></hr>

        </div>
    <MenuPrincipal/>
    </header>
    </>
}

export default Cabecalho;