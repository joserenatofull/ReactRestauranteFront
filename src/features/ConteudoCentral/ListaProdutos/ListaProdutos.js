import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

import { atualizarListaCompletaProdutos, NENHUMA_CATEGORIA_SELECIONADA } from '../../../store/slices/produtosSlice';

import './ListaProdutos.css';
import excluirProdutoHelper from '../../../utilitarios/excluirProdutoHelper'; 

const ListaProdutos = () => {
  const dispatch = useDispatch();
  const [produtoExclusao, setProdutoExclusao] = useState( null );

  //useSelector acessa o state do redux e verifica se o estado modificou
  // se sim dispara uma ação para atualizar o novo state
  const lista = useSelector( state => state.produtos.lista );
//state return state(store).produtos(obj reducer).lista(in reducer get list)
  const categoriaSelecionada = useSelector( state => state.produtos.categoriaSelecionada );
  const usuarioEstaLogado = useSelector( state => state.usuario.usuarioEstaLogado );
  const usuarioLogado = useSelector( state => state.usuario.usuarioLogado);

  const excluirProduto = async () =>{
    //resultado recebe função(id);
    const resultado = await excluirProdutoHelper(produtoExclusao.id);
    
    if(resultado){
      dispatch(atualizarListaCompletaProdutos());
      alert(`O Item foi removido do cardápio!`)

    }else {
      alert("Erro ao remover este item!")
    }

  }

  return <>
      
    { categoriaSelecionada === NENHUMA_CATEGORIA_SELECIONADA ? 
      null
      :
      <h4 className='pt-3'>
        Categoria: { categoriaSelecionada }
      </h4>
    }
  
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-3" id='lista-produtos'>

      { lista.map( produto => <div className="col">
        <div className="card">
        <Link to={`detalhes-produto/${produto.id}`}>

          <img 
            src={ produto.imagem } 
            className="card-img" 
            alt={ produto.produto } />
            </Link>

          <div className="card-body">
            <h5 className="card-title">{ produto.produto }</h5>
            <p class="card-text">{ produto.descricao }</p>
            <p class="card-text">{ produto.categoria }</p>
          
            <div className="row">

              <div className="col-8">
               <strong>R$:</strong> { produto.preco }
              </div>
              <div className="row">

              <div className="col-12 text-end" >
              <Link to={`detalhes-produto/${produto.id}`}>

              <i class="fas fa-eye ms-3 text-secondary"></i>
              </Link>
           

              {usuarioEstaLogado && usuarioLogado.tipo === '1' ?
           
              <Link to={`edicao-produto/${produto.id}`}>

              <i className="fas fa-pencil-alt ms-3 text-sucess "></i>
              </Link>            : null }


{usuarioEstaLogado && usuarioLogado.tipo === '1' ?

              <div className='lp-icone-excluir' 
                    onClick={ () => setProdutoExclusao( produto ) }>
                      <i 
                        className="far fa-trash-alt ms-3 text-danger" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal" ></i>
                  </div>
            
              
       
            
            : null }
              </div>
              </div>
              </div>
              </div>
              </div>

          </div>

    ) }
      
    </div>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Remover item:
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">  {/* produtoExclusao? = ainda nao existia */}
            Você tem certeza que deseja remover <strong>{ produtoExclusao?.produto }</strong>?
          </div>

          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button> */}

            <button 
              type="button" 
              className="btn btn-danger" 
              data-bs-dismiss="modal"
              onClick={ () => excluirProduto()}>
                Sim
            </button>

            <button 
              type="button" 
              className="btn btn-secondary" 
              data-bs-dismiss="modal">
                Não
            </button>

          </div>
        </div>
      </div>
    </div>

  </>;

};

export default ListaProdutos;