import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (
        state.itens.find((favoritosType) => favoritosType.id === favoritos.id)
      ) {
        state.itens = state.itens.filter(
          (favoritosType) => favoritosType.id !== favoritos.id
        )
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
