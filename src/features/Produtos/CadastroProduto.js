import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory} from 'react-router-dom';
import salvarProdutoHelper from '../../utilitarios/salvarProdutoHelper';
import { atualizarListaCompletaProdutos } from '../../store/slices/produtosSlice';
import {Botao,Campo,Rotulo,Input,Selectt} from '../../styledComponents/styledComponents';


const CadastroProduto = () => {

    const dispatch = useDispatch();
    const history = useHistory();
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

  const salvar = () => {

      const novoProduto = {
          produto: titulo,
          preco:preco.replace(',','.'),
          descricao:descricao,
          categoria:categoria,
          imagem:imagem,
          imagem_destaque:imagemDestaque
      };

      //resultado recebe comunicação ajax passando obj novoProduto
      const resultado = salvarProdutoHelper (novoProduto);
      if( resultado){
          dispatch(atualizarListaCompletaProdutos());
          alert(`O item: ${titulo} foi criado`)
          history.push("/");

      }else{
          alert('Houve um erro ao cadastrar o produto');
      }
  };

 return <>
    {usuarioEstaLogado && usuarioLogado.tipo === '1' ?   
    <> 
    <h1># Cadastro de Itens:</h1>

    <form onSubmit={e=> e.preventDefault()}> 
    <Campo>
    <Rotulo largura100 htmlFor='titulo'>Título: </Rotulo>
    <Input  type='text' id='titulo' name='titulo'
        onChange={e => setTitulo(e.target.value)} />       
    </Campo>

    <Campo>
    <Rotulo largura100 htmlFor='preco'>Preço: </Rotulo>
    <Input  type='text' id='preco' name='preco'
               onChange={e => setPreco(e.target.value)}  />   
    
    </Campo>

    <Campo>
    <Rotulo largura100 htmlFor='descricao'>Descriçao: </Rotulo>
    <Input  type='text' id='descricao' name='descricao'
        onChange={e => setDescricao(e.target.value)} />    
    
    </Campo>

    <Campo>
    <Rotulo largura100 htmlFor='categoria'>Categoria: </Rotulo>
    <Selectt  type='text' id='categoria' name='categoria'  onChange={e => setCategoria(e.target.value)}>
      <option value="-1">Selecione uma categoria</option>
    {categorias.map((categoria =>    <option value={categoria}>    {categoria}</option>
))}
     </Selectt>
    </Campo>
 
    
<Campo>    <Rotulo largura100 htmlFor='imagem'>Imagem: </Rotulo>
    <Input  type='text' id='imagem' name='imagem'
    onChange={e => setImagem(e.target.value)} 
    />    
    </Campo>

    
<Campo>    <Rotulo largura100 htmlFor='imagemDestaque'>Imagem Destaque: </Rotulo>
    <Input  type='text' id='imagemDestaque' name='imagemDestaque'
        onChange={e => setImagemDestaque(e.target.value)} />    
    
    </Campo>
    <Botao className="btn btn-primary"             onClick={ () => salvar() } 

>Salvar</Botao>
    </form>
    </>

    : <p>"Você não tem permissão para cadastrar itens."</p>
}
  </>;

};


export default CadastroProduto;