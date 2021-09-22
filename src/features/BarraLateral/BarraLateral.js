import React from 'react';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {filtrarProdutosPeloPreco} from '../../store/slices/produtosSlice';
import './BarraLateral.css';
const BarraLateral = () => {
  const dispatch = useDispatch();
  const lista = useSelector( state => state.categorias.lista );

  
const [preco022,setPreco022] = useState(false);
const [preco2250,setPreco2250] = useState(false);
const [preco50100,setPreco50100] = useState(false);

  const Aplicar = () => { 
    

    
  }

  return <>
    <aside>
      
      <div className="accordion pt-3" id="accordionExample">
      <form onSubmit={e=> e.preventDefault()}> 

        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Preço:
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              <ul className="list-group">
                <li className="list-group-item">
                  <input type='checkbox' name='estado' value='0-22'
                    defaultChecked={preco022}
                    onChange={() => setPreco022(!preco022)}
                  />R$0,00 - R$21,99 
                </li>
                <p className='br-p-preco'>{preco022 ? "Itens até 21,99" : null}
</p>
                <li className="list-group-item">
                  <input type='checkbox' name='estado' value='22-50'
                      defaultChecked={preco2250}
                      onChange={() => setPreco2250(!preco2250)}
                  /> R$22,00 - R$49,99
                </li>
                <p className='br-p-preco'>{preco2250 ? 'Itens de R$22,00 á R$49,99' : null}
</p>
                <li className="list-group-item">
                  <input type='checkbox' name='estado' value='50-100' 
                      defaultChecked={preco50100}
                      onChange={() => setPreco50100(!preco50100)}
                  /> R$50,00 - 100,00
                </li>
                <p className='br-p-preco'>{preco50100 ? "Itens de R$50,00 até R$100,00" : null}
</p>
              </ul>
              
              <br></br> 

          
                  <button onClick={ e => dispatch( filtrarProdutosPeloPreco() ) }>Filtrar</button>
            </div>
          </div>
        </div>
</form>
       
      </div>

    </aside>
  </>

};

export default BarraLateral;