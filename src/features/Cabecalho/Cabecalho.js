import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MenuPrincipal from './MenuPrincipal/MenuPrincipal';

import './Cabecalho.css';

const Cabecalho = () => {

  const usuarioEstaLogado = useSelector( state => state.usuario.usuarioEstaLogado );
  const usuarioLogado = useSelector( state => state.usuario.usuarioLogado );

  // const produtos = useSelector( state => state.produtos.lista );
  const produtos = useSelector( state => state.produtos.listaCompleta );

  const style = {
    'span': {
      fontWeight: 'bold'
    }
  };

  return <>
    <header>

      <div className="container p-3">
        <div className="row">

          <div className="col-12 col-sm-8 col-md-10">
            <Link to='/'>
              <img id='logo-img'
                src='/imagens/sep.jpg' 
                alt='Logo' 
                title='Logo do Infnet.' />
            </Link>
          </div>

          <div className="col-12 col-sm-4 col-md-2">
            
            { usuarioEstaLogado ?
              <div>
                Seja bem-vindo, <span style={style.span}>{ usuarioLogado.nome }</span>.
              </div>
              : null }

            <div>
              { usuarioEstaLogado ?
                <Link to='logout'>
                  <i className="far fa-user"></i> Logout
                </Link>
                :
                <Link to='login'>
                  <i className="fas fa-user"></i> Login
                </Link>
              }
            </div>
          </div>

        </div>
        <hr style={{backgroundImage: "linear-gradient(to right, black,red, orange)"
 ,marginBottom:'0px',height:'3px'}}></hr>
 
      </div>

     
      <MenuPrincipal />
    </header>
  </>;

};

export default Cabecalho;