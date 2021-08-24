import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import logarHelper from '../../utilitarios/logarHelper';

import { salvarUsuario } from '../../store/slices/usuarioSlice';

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  // para salvar o historico de rotas

  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');
// criado states usuario e senha 

  const logar = async () => {
    //resultado recebe função logarHelper(param,param2)
    const resultado = await logarHelper( usuario, senha );

    if( resultado.sucesso ) {
      // salva no redux as informações do usuário logado
      dispatch( salvarUsuario( resultado.usuario ) );

      // manda o usuário para a tela inicial
      history.push('/');
    } else { 
      alert( 'Verifique úsuario e senha.' );
    }

  };

  return <>
  
    <h2>Login</h2>
    <form onSubmit={ e => e.preventDefault() }>

      <div className='l-campo'>
        <label htmlFor='usuario'>Usuário: </label>
        <input 
          type='text' 
          id='usuario' 
          name='usuario'
          //setUsuario = o que foi digitado no input
          onChange={ e => setUsuario( e.target.value ) } />
      </div>

      <div className='l-campo'>
        <label htmlFor='senha'>Senha: </label>
        <input 
          type='password' 
          id='senha' 
          name='senha'
         //setSenha = o que foi digitado no input

          onChange={ e => setSenha( e.target.value ) } />
      </div>

      <button onClick={ () => logar() } >
        Entrar
      </button>

    </form>

  </>;

};

export default Login;