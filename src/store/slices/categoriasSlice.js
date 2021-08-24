import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lista: [],
};

export const categoriasSlice = createSlice({
  name: 'categorias',
/*   initialState: initialState, 
 */  initialState,
  reducers: {
    salvarCategorias: (state, action) => {
      const produtos = action.payload;

      //crio a lista categorias...
      const categorias = [];
      // vou percorrendo a lista e produtos, pegando cada categoria
      for( let i = 0; i < produtos.length; i++ ) {
        const produto = produtos[i];
        //produto = produtos na posição i


        //para não repetir as categorias..se categoria não incluida na lista..
        //equivalente ao distinct sql
        if( !categorias.includes( produto.categoria ) ) {
          
          categorias.push( produto.categoria );
          // insere ao fim da lista a categoria do produto
        }
      }

      state.lista = categorias;
    },
  },
});

export const { salvarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
