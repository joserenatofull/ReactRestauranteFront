import axios from 'axios';
//import axios configurado com baseURL

const editarProdutoHelper = async (id, produtoEditado) =>{
 
    const axios2 = axios.create( {
        baseURL: 'http://localhost:8000/v2/',
        //header captura token do localStorage para autenticar
        headers: { 
            token:JSON.parse(localStorage.getItem('token'))
            //localStorage esta como String... Conversão:JSON.parse para convert para JSON
        }
    } );
     
 try {  
      const resposta = await axios2.put(`cardapio/${id}`, produtoEditado);
        return true;

} 

catch (e){
            return false;
} 


}
export default editarProdutoHelper;