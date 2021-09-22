import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MenuPrincipal from './MenuPrincipal/MenuPrincipal';

import './Cabecalho.css';

const Cabecalho = () => {
  //busca no redux o state.usuario.usuarioEstaLogado
  // busca no redux tipo do usuario logado
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
                src='/imagens/logo.jpg' 
                alt='Logo' 
                title='Logo' />
            </Link>
          </div>

          <div id='login' className="col-12 col-sm-4 col-md-2">
{/*             usuario logado?
 */}            { usuarioEstaLogado ?
              <div>    
                Seja bem-vindo, <span style={style.span}>{ usuarioLogado.nome }</span>.
              </div>
              : null }

            <div>
              { usuarioEstaLogado ?
                <Link  to='logout'>
                  |<i className="far fa-user"></i>| Logout
                </Link>
                :<div id='login-text'>
                <Link to='login' name='login' id='login'>
                  <i className="fas fa-user text-secondary"></i>
                </Link> |<label id='l-label'>Login</label>|</div>
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