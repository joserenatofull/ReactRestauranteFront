import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import logarHelper from '../../utilitarios/logarHelper';

import { salvarUsuario } from '../../store/slices/usuarioSlice';

import {Botao,Campo,Rotulo,Input} from '../../styledComponents/styledComponents';

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

    //se resultado true
    if( resultado.sucesso ) {
      // salva no redux as informações do usuário logado
      dispatch( salvarUsuario( resultado.usuario ) );

      // manda o usuário para a tela inicial
      //adiciona no  fim do historico, / foi configurado em ecommerce como Home
      history.push('/');
    } else { 
      alert( 'Verifique úsuario e senha.' );
    }

  };

  return <>
  
    <h2># Login:</h2><br></br>
    <form onSubmit={ e => e.preventDefault() }>

      <Campo>
        <Rotulo>Usuário:</Rotulo>
        <Input
          type='text' 
          id='usuario' 
          name='usuario'
          //setUsuario = o que foi digitado no input
          onChange={ e => setUsuario( e.target.value ) } />
      </Campo>

      <Campo>
      <Rotulo>Senha:</Rotulo>
        <Input
          type='password' 
          id='senha' 
          name='senha'
         //setSenha = o que foi digitado no input

          onChange={ e => setSenha( e.target.value ) }
          fundoCinza
          />
      </Campo>

      <Botao onClick={ () => logar() } >
        Entrar
      </Botao>

    </form>

  </>;

};

export default Login;