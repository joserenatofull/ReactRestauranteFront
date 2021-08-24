import axios from "../axios/axios";
// LH = usuario e senha digitadas => { try: autenticação com back,catch: erro }
const logarHelper = async ( usuario, senha ) => {

  try {
        // dados recebe obj = usuario e senha
    const dados = { usuario, senha };
        // resultado = comunicação com back (uri back, usuario e senha)
    const resultado = await axios.post( 'auth', dados );
    // LS.setItem('nomedachave', token do back )
    localStorage.setItem( 'token', resultado.data.token );

    return {
      sucesso: true,
      usuario: resultado.data.usuario
    };
  } catch (e) {

    return {
      sucesso: false,
      usuario: null
    };
    
  }

};

export default logarHelper;