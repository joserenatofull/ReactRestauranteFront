import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usuarioEstaLogado: false,
  usuarioLogado: null
  //qual Tipo de usuario logado
};

export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    salvarUsuario: (state, action) => {
      state.usuarioLogado = action.payload;
      // state.usuarioLogado = o usuario
      state.usuarioEstaLogado = true;
      //true

      // return {
        //...traz tudo que foi retornado no obj, crio novo objeto e set
      //   ...state,
      //   usuarioLogado: action.payload,
      //   usuarioEstaLogado: true
      // };
    },
    //apagarUsuario recebe stado inicial
    apagarUsuario: state => state = initialState,
  },
});

export const { salvarUsuario, apagarUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;
