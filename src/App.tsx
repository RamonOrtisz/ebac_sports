import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

import { store } from './store'
import favoritos, { favoritar } from './store/reducers/favoritos'
import carrinho from './store/reducers/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
  find(arg0: (produto: Produto) => boolean): Produto | null
  filter(arg0: (produto: Produto) => boolean): Produto[]
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
