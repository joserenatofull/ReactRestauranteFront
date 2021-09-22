import axios from '../axios/axios';

const pegarProdutoHelper = async (id) => {
    //pegar o produto pelo id

try {
    //resposta recebe axios.pegando(uri(cardapio)/id(id do item))
    const resposta = await axios.get(`cardapio/${id}`);

    return {
/*  sucesso v e produto captura resposta.dados
 */ sucesso: true,
 produto:resposta.data};
} catch(e){
return{
    sucesso: false,
    produto: null
}
}
}

export default pegarProdutoHelper;