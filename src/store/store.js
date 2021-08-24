import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from './slices/produtosSlice';
import categoriasReducer from './slices/categoriasSlice';
import usuarioReducer from './slices/usuarioSlice';

export const store = configureStore({
  reducer: { // Exemplo Reducer:Movimentação conta
             //Exemplo miniReducers:deposito,debito
//components que conseguem identificar q ação que deve ser feita nesse contexto
// ... e gerar novo estado baseado no contexto
    produtos: produtosReducer,
    //produtos: produtosSlice
    categorias: categoriasReducer,
    //categorias:categoriasSlice
    usuario: usuarioReducer,
  },
});
