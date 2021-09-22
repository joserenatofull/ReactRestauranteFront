import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
import pegarProdutoHelper from '../../utilitarios/pegarProdutoHelper';
import { atualizarListaCompletaProdutos } from '../../store/slices/produtosSlice';
import editarProdutoHelper from '../../utilitarios/editarProdutoHelper';

const Edicao = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    //capturar o id do item
    const { id } = useParams();
    //helper para carregar os dados do item e salvar nos seus states


    useEffect(async () => {
    const resultado = await pegarProdutoHelper ( id );

    //resultado is true?     
    if(resultado.sucesso){
    //set o Titulo(resultado(id).obj com todos os dados do item.atributo igual do banco)
    setTitulo(resultado.produto.produto);
    setPreco(resultado.produto.preco.replace('.',','));
    setDescricao(resultado.produto.descricao);
    setCategoria(resultado.produto.categoria);
    setImagem(resultado.produto.imagem);
    setImagemDestaque(resultado.produto.imagem_destaque);
    
    }else{
        alert('Houve um erro ao Editar o produto')
    }
    },[] );


      //busca o states do usuario salvo no redux
  const usuarioEstaLogado = useSelector( state => state.usuario.usuarioEstaLogado);
  const usuarioLogado = useSelector( state => state.usuario.usuarioLogado);
  //busca a lista de categorias salva no redux
  const categorias = useSelector( state => state.categorias.lista);

  const [titulo,setTitulo] = useState ('');
  const [preco,setPreco] = useState ('');
  const [descricao,setDescricao] = useState ('');
  const [categoria,setCategoria] = useState ('');
  const [imagem,setImagem] = useState ('');
  const [imagemDestaque,setImagemDestaque] = useState ('');

  const editar = () => {

      const produtoEditado = {
          //back:o que usuario digitou
          produto: titulo,
          preco:preco.replace(',','.'),
          descricao:descricao,
          categoria:categoria,
          imagem:imagem,
          imagem_destaque:imagemDestaque
      };

      //resultado recebe comunicação ajax passando obj novoProduto
      const resultado = editarProdutoHelper (id,produtoEditado);
      if( resultado ){
          //atualiza a lista com os produtos alterados 
          alert(`O item: ${titulo} foi atualizado`)
          dispatch(atualizarListaCompletaProdutos());
          history.push("/");

      }else{
          alert('Houve um erro ao cadastrar o produto');
      }
  };

 return <>
    {usuarioEstaLogado && usuarioLogado.tipo === '1' ?   
    <> 
    <h1>Edição de Itens:</h1>

    <form onSubmit={e=> e.preventDefault()}> 
    <div className="cp-campo">
        <img src={imagem} className="d-block w-30 " alt="..." /><br></br>
    <label htmlFor='titulo'>Título: </label>
    <input  type='text' id='titulo' name='titulo'
        onChange={e => setTitulo(e.target.value)}
        value={titulo} />       
    </div>

    <div className="cp-campo">
    <label htmlFor='preco'>Preço: </label>
    <input  type='text' id='preco' name='preco'
        onChange={e => setPreco(e.target.value)} 
        value={preco}/>    
    
    </div>

    <div className="cp-campo">
    <label htmlFor='descricao'>Descricao: </label>
    <input  type='text' id='descricao' name='descricao'
        onChange={e => setDescricao(e.target.value)} 
        value={descricao}/>    
    
    </div>

    <div className="cp-campo">
    <label htmlFor='categoria'>Categoria: </label>
    <select  type='text' id='categoria' name='categoria'  onChange={e => setCategoria(e.target.value)}>
      <option selected disabled value="-1">Selecione uma categoria</option>
    {categorias.map((item =>    
    // se o item da vez for igual categoria imprime
    <option value={item} selected={item === categoria}> 
       {item}</option>
))}
     </select>
    </div>

    
    <div className="cp-campo">
    <label htmlFor='imagem'>Imagem: </label>
    <input  type='text' id='imagem' name='imagem'
    onChange={e => setImagem(e.target.value)} 
    value={imagem}
    />    
    </div>

    
    <div className="cp-campo">
    <label htmlFor='imagemDestaque'>Imagem Destaque: </label>
    <input  type='text' id='imagemDestaque' name='imagemDestaque'
        onChange={e => setImagemDestaque(e.target.value)}
        value={imagemDestaque}
        />    
    
    </div>
    <button className="btn btn-primary"             onClick={ () => editar() } 

>Atualizar</button>
    </form>
    </>

    : <p>"Você não tem permissão para cadastrar itens."</p>
}
  </>;

};


export default Edicao;