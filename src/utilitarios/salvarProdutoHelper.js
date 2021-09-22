import axios from "axios";
    //Requisição salvar produto precisa de autenticação... 
    const salvarProdutoHelper = async novoProduto => {

    const axios2 = axios.create( {
    baseURL: 'http://localhost:8000/v2/',
    //header captura token do localStorage para autenticar
    headers: { 
        token:JSON.parse(localStorage.getItem('token'))
        //localStorage esta como String... Conversão:JSON.parse para convert para JSON
    }
 
  } );




  try {

    const resposta = await axios2.post( 'cardapio', novoProduto );
    //add obj Novo produto em cardapio
    return true;

  } catch(e) {

    return false;

  }

};

export default salvarProdutoHelper;