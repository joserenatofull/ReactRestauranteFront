import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


//import das action de store
import { 
  filtrarProdutosPorCategoria, 
  NENHUMA_CATEGORIA_SELECIONADA,
  salvarCampoPesquisar,
  filtrarProdutosPeloCampoPesquisar
} from '../../../store/slices/produtosSlice';

const MenuPrincipal = () => {
  // lista recebe o state store(lista)
  const lista = useSelector( state => state.categorias.lista );
  // dispara para o Redux ações...

    //busca o states do usuario salvo no redux
  const usuarioEstaLogado = useSelector( state => state.usuario.usuarioEstaLogado);
  const usuarioLogado = useSelector( state => state.usuario.usuarioLogado);

  const dispatch = useDispatch();

  return <>

    <div className='container'>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link id="home" className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item dropdown">


                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Cardápio
                </a>
  

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                  { lista.map( categoria => <li key={ categoria }>
                    <a 
                      className="dropdown-item" 
                      href="#"
                      //dispara para o redux a action(categoria selecionada)
                      onClick={ () => dispatch( filtrarProdutosPorCategoria( categoria ) ) }>
                      { categoria }
                    </a>
                  </li> ) }

                  <li key={ NENHUMA_CATEGORIA_SELECIONADA }>
                    <a 
                      className="dropdown-item" 
                      href="#"
                      //dispara(action(param))
                      onClick={ () => dispatch( filtrarProdutosPorCategoria( NENHUMA_CATEGORIA_SELECIONADA ) ) } >
                      Todos os Produtos
                    </a>
                  </li>
                </ul>
                
              </li>
              

{/*               Cadastro de novo item apenas para adms
 */}              {usuarioEstaLogado && usuarioLogado.tipo === '1' ?
              <li className="nav-item">
                <Link className="nav-link" to='cadastro-produto'>Novo Item</Link>
              </li>
              : null}
               <li className="nav-item">
                <Link className="nav-link" to='espaco'>Espaço</Link>
              </li>
            </ul>

            <form 
              className="d-flex"
              onSubmit={ e => e.preventDefault() }>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Digite aqui..." 
                aria-label="Digite aqui"
                // e => dispara para o redux (action) o que foi digitado 
                onChange={ e => dispatch( salvarCampoPesquisar( e.target.value ) ) } />
              <button 
                className="btn btn-outline-success" 
                type="submit"
       // e => dispara para o redux (action) e retorna os produtos
                onClick={ e => dispatch( filtrarProdutosPeloCampoPesquisar() ) } >
                  Buscar
              </button>
            </form>

          </div>
        </div>
      </nav>

    </div>
  </>;

};

export default MenuPrincipal;