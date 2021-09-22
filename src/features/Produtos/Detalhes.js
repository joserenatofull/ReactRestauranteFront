import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import pegarProdutoHelper from '../../utilitarios/pegarProdutoHelper';
import './css/Detalhes.css';

const Detalhes = () =>{

    const { id } = useParams();

    const [produto,setProduto] = useState('');

    useEffect( async () => {
        const resultado = await pegarProdutoHelper(id);

        if(resultado.sucesso){
        setProduto( resultado.produto );
        }else{
            alert("Erro ao carregar este item:")
        }
    },[]);

    return <>
    <h3 id='d-h3'>  {produto.produto} </h3>
    
    <div className="container">
    <div className="row">
        <div className="col">
    <img id='d-img'src={produto.imagem_destaque}></img>
    </div>
    <div className="col">
        <div id='d-categoria'>
        #{produto.categoria}
    </div>
    <div id='d-descricao'>
         <br />- {produto.descricao}
    </div>
    <hr id='d-hr'></hr>
    <div id='d-preco'>
       Preço: <strong>R${produto.preco}</strong>
    </div>
    </div>


    </div>
    </div>
    </>
}

export default Detalhes;