import React from 'react';
import {useSelector} from 'react-redux';

import './ConteudoCentral.css';
import ListaProdutos from './ListaProdutos/ListaProdutos';

const ConteudoCentral = () => {
  //produtos recebe para pegar o que ta salvo no state da lista
  //state.slice.lista 
  const produtos = useSelector( state => state.produtos.listaCompleta );

  return <>
    <main className="asideEconteudoC">
    <div>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    { produtos.map( ( produto, indice ) => {
      //item,indice - vai entregando produto e indice
      //mostra o active quando o indice for = 0         
      const classeActive = indice === 0 ? 'active' : '';
      //preenche a classe com active se vdd
      
      //<div className="carousel-item active">
      return <div id='carousel-cc' className={ `carousel-item ${ classeActive }` } key={produto.id} >
        <img 
          src={ produto.imagem_destaque }
          className="d-block" 
          alt={ produto.produto } />
      </div>;
    } ) }

    {/* <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div> */}

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
      
      <ListaProdutos />
    </main>
  </>;

};

export default ConteudoCentral;