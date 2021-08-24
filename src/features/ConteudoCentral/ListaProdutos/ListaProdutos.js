import React from 'react';
import { useSelector } from 'react-redux';

import { NENHUMA_CATEGORIA_SELECIONADA } from '../../../store/slices/produtosSlice';

import './ListaProdutos.css';

const ListaProdutos = () => {
  //useSelector acessa o state do redux e verifica se o estado modificou
  // se sim dispara uma ação para atualizar o novo state
  const lista = useSelector( state => state.produtos.lista );
//state return state(store).produtos(obj reducer).lista(in reducer get list)
  const categoriaSelecionada = useSelector( state => state.produtos.categoriaSelecionada );

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

          <img 
            src={ produto.imagem } 
            className="card-img" 
            alt={ produto.produto } />

          <div className="card-body">
            <h5 className="card-title">{ produto.produto }</h5>
            <p class="card-text">{ produto.descricao }</p>
            <p class="card-text">{ produto.categoria }</p>
          
            <div className="row">

              <div className="col-8">
                R$ { produto.preco }
              </div>

              {/* <div className="col-2">
                <i className="fas fa-info text-info"></i>
              </div>

              <div className="col-2">
                <i 
                  className="fas fa-heart text-danger" 
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal"></i>
              </div> */}

            </div>

          </div>

        </div>
      </div>
    ) }
      
    </div>

    {/* Modal */}
    {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Produto favoritado!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            O produto foi salvo na tua lista de favoritos.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div> */}

  </>;

};

export default ListaProdutos;