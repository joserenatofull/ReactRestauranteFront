import axios from 'axios';
const excluirProdutoHelper = async (id) => {

    
    const axios2 = axios.create( {
        baseURL: 'http://localhost:8000/v2/',
        //header captura token do localStorage para autenticar
        headers: { 
            token:JSON.parse(localStorage.getItem('token'))
            //localStorage esta como String... Conversão:JSON.parse para convert para JSON
        }});
     
try { 
    const resposta = await axios2.delete(`cardapio/${id}`);

    return true;
}

catch(err){
return false;
}
}
export default excluirProdutoHelper;