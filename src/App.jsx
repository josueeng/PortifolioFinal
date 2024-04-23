import React from 'react'
import { GlobalStyle } from './assets/components/Header/Header.styled.jsx';
import Home from './assets/pages/Home/Home.jsx'
import Sobre from './assets/pages/Sobre/Sobre.jsx';
import Footer from './assets/components/Footer/Footer.jsx';
import Minhas from './assets/pages/Minhas/Minhas.jsx';





export default function App () {
  return (
    <>
      <Home/>
      <Sobre/>
      <Minhas/>
      <Footer/>
      <GlobalStyle/>

    </>
  )
}
