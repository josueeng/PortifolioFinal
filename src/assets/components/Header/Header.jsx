import React from 'react'
import * as H from './Header.styled.jsx'
import git from '../../imagens/github.png'
import linkedin from '../../imagens/linkedin.png'
import instagram from '../../imagens/instagram.png'
import  Hamburguer  from '../menu/Menu.jsx'

export default function Header() {
  return (
    <>
    <H.header>
      <H.text>&lt; &gt; Josué Lopes &lt;/&gt;</H.text>
      <H.menu>
        <H.LinkMenu href="#sobre">Sobre Mim</H.LinkMenu>
        <H.LinkMenu href="#minhas">Minhas Tecnologias</H.LinkMenu>
        <H.LinkMenu href="#projetos">Meus Projetos</H.LinkMenu>
        <H.LinkMenu href="#footer">Contato</H.LinkMenu>
      </H.menu>
      
      <H.Redes>
        <H.Rede src={git} alt="" />
        <H.Rede src={linkedin} alt="" />
        <H.Rede src={instagram} alt="" />
      </H.Redes>
      <Hamburguer />
    </H.header>
    
    </>
    
  )
}
