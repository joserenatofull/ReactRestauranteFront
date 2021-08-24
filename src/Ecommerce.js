import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cabecalho from './features/Cabecalho/Cabecalho';
import Rodape from './features/Rodape/Rodape';
import BarraLateral from './features/BarraLateral/BarraLateral';
import ConteudoCentral from './features/ConteudoCentral/ConteudoCentral';

import axios from './axios/axios';
//import as fatias de reducer
import { salvarProdutos } from './store/slices/produtosSlice';
import { salvarCategorias } from './store/slices/categoriasSlice';
import { useDispatch } from 'react-redux';

import Login from './features/Login/Login';
import Logout from './features/Logout/Logout';

const Ecommerce = () => {

  const dispatch = useDispatch();

  useEffect( async () => {
 // traz a lista com o cardapio
    try{

      const resultado = await axios.get( 'cardapio' );
      // dispatch passando action
      dispatch( salvarProdutos( resultado.data ) );
      // dispatch (nomeAction(passandoAPI))
      dispatch( salvarCategorias( resultado.data ) );
      // dispatch (nomeAção(passandoAPI))
    } catch( e ) {
      alert('Houve algum problema na comunicação com a API.');
    }

  }, [] );

  return <>
{/*  encapsular os comp no BrowserRouter
 */}    <BrowserRouter>

      <div id='ecommerce'>

        <Cabecalho />

        <div className="container">
          <Switch>

            <Route exact path='/'>
{/*               Rota / carrega components BR e CC
 */}    
              <div className="row">

                <div className="col-2">
                  <BarraLateral />
                </div>

                <div className="col-10">
                  <ConteudoCentral />
                </div>
                
              </div>
        
            </Route>
{/*              Rota /login manda para tela de login 
 */}            <Route path='/login'  component={ Login }/>
            <Route path='/logout' component={ Logout } />

          </Switch>

        </div>

        <Rodape />

      </div>

    </BrowserRouter>

  </>;

};

export default Ecommerce;