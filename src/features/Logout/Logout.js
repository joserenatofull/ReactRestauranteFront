import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { apagarUsuario } from '../../store/slices/usuarioSlice';

const Logout = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {

    // Apagar o token do localStorage.
    localStorage.removeItem( 'token' );

    // Apagar as informações do usuário do Redux.
    dispatch( apagarUsuario() );

    // Direcionar o usuário para a tela inicial.
    history.push('/');

  };

  return <>
  
    <h2 className='mt-3'>Tela de Logout</h2>

    <h5 className='mt-4'>Você tem certeza que deseja sair?</h5>

    <div>
      <button
        className='btn btn-primary me-3'
        onClick={ () => { logout() } } >
          Sim
      </button>

      <button
        className='btn btn-danger'
        onClick={ () => history.push('/') } >
          Não
      </button>
    </div>

  </>;

};

export default Logout;