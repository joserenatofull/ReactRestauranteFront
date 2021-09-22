import { createSlice } from '@reduxjs/toolkit';

const NENHUMA_CATEGORIA_SELECIONADA = 'NENHUMA_CATEGORIA_SELECIONADA';

// Estados Iniciais
const initialState = {
  //lista de produtos
  lista: [],
  listaCompleta: [],
  //lista completa de produtos para realizar a filtragem
  categoriaSelecionada: NENHUMA_CATEGORIA_SELECIONADA,
  //cateroriaSeleciadona e campoPesquisar Iniciam null
  campoPesquisar: '',
  preco022: true,
  preco2250:true,
  preco50100:true,
  atualizarListaCompleta: true
  //houve mudança na lista: true/false !
};

// Reducers: Redutores
// Reducer produtos
export const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    // reducer- mapear a action e seta state

    salvarProdutos: (state, action) => {
      //reducer SP configurando state e action e set novo state
      //state: estado atual e action:nome 
      const produtos = action.payload;
      // produtos recebe action.dados q equivale resultado.data em Ecommerce.js
      state.lista = produtos;
      // estado da lista recebe produtos
      state.listaCompleta = produtos;
      //lista Completa foi criada para fazer a filtragem de categorias e
      //nao perder o estado inicial da lista []
    },

    filtrarProdutosPorCategoria: (state, action) => {
      //const CS recebe action.dados q equivale categoria em menuPrincipal.js
      const categoriaSelecionada = action.payload;


      if( categoriaSelecionada !== NENHUMA_CATEGORIA_SELECIONADA ) {
        //se selecionou alguma categoria 
        // PF = nova lista - listaCompleta [] - filtrada
        const produtosFiltrados = state.listaCompleta.filter( produto =>
           produto.categoria === categoriaSelecionada );
        //const PF recebe os produtos filtrados, que correspondem a categoria 
          state.lista = produtosFiltrados;
      // set o estado da lista de produtos para trazer somente os p da categoria selecionada
        state.categoriaSelecionada = categoriaSelecionada;
        //set o state de categoria selecionada para a categoria selecionada
      } else {
        //categoria nao selecionada seta a lista de produtos para trazer todos os p
        state.lista = state.listaCompleta;
        //set a categoria selecionada para nenhuma
        state.categoriaSelecionada = NENHUMA_CATEGORIA_SELECIONADA;
      }
    },

    salvarCampoPesquisar: ( state, action ) => { 
      state.campoPesquisar = action.payload;
      //estado.CP recebe nomeAction.oquefoidigitado
    },

    salvarPreco022: ( state, action ) => { 
      state.Preco022 = action.payload;
      //estado.CP recebe nomeAction.oquefoidigitado
    },
    salvarPreco2250: ( state, action ) => { 
      state.Preco2250 = action.payload;
      //estado.CP recebe nomeAction.oquefoidigitado
    },
    salvarPreco50100: ( state, action ) => { 
      state.Preco50100 = action.payload;
      //estado.CP recebe nomeAction.oquefoidigitado
    },

    // não recebe action pq ja foi passado para salvarCampoPesquisar
    filtrarProdutosPeloCampoPesquisar: state => {

      const palavras = state.campoPesquisar.split(' ');
  //p = estado do que foi digitado. split(' ')quando tem espaço divide string
  //exemplo: José Renato = "Jose", "Renato"

      const produtos = state.listaCompleta;
      //produtos recebe a listaCompleta que é a listaAuxiliar, nela que faço filter

      const produtosFiltrados = produtos.filter( produto => {

        for( let i = 0; i < palavras.length; i++ ) {
          //for até i < tamanho da lista de palavras

          const palavra = palavras[i].toLowerCase();//convert para minuscula

          //palavra = recebe o que foi digitado[i]  [cada Palavra]

          
          // returna se existir produto nos campos:produto,descrição ou categoria
          //convert p/minuscula as palavras dos campos:produto,descrição e categoria
          return produto.produto.toLowerCase().includes( palavra )
            || produto.descricao.toLowerCase().includes( palavra )
            || produto.categoria.toLowerCase().includes( palavra );

        }

      } );

      state.lista = produtosFiltrados;

    },
    
    filtrarProdutosPeloPreco:state => {

      
      const preco = 22;
 
      const produtos = state.listaCompleta;

      const produtosFiltrados = produtos.filter( produto => {

        for( let i = 0; i < preco.length; i++ ) {

          const preco = preco[i];


          
        
          return produto.preco.includes( preco )
          
        }

      } );

      state.lista = produtosFiltrados;

    },

    atualizarListaCompletaProdutos: state => {
      state.atualizarListaCompleta = !state.atualizarListaCompleta;
    }
  },
});


export { NENHUMA_CATEGORIA_SELECIONADA };

export const { 
  //exportando os Reducers 
  salvarProdutos, 
  filtrarProdutosPorCategoria,
  salvarCampoPesquisar,
  filtrarProdutosPeloCampoPesquisar,
  atualizarListaCompletaProdutos,
  filtrarProdutosPeloPreco
} = produtosSlice.actions;


//export o Reducer maior
export default produtosSlice.reducer;