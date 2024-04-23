import React from 'react'
import * as F from './Footer.styled.jsx'
import git from '../../imagens/github.png'
import linkedin from '../../imagens/linkedin.png'
import instagram from '../../imagens/instagram.png'

export default function Header() {
  return (
    <F.ContFoo>
      
      <F.ContTop>
      <F.text>&lt; &gt; Josué Lopes &lt;/&gt;</F.text>
      <F.ContTopSecond>
      <F.TextCont>(87)9 9919 6460</F.TextCont>
      <F.TextCont>Josue.programador@hotmail.com</F.TextCont>

      <F.Redes>
        <F.Rede src={git} alt="" />
        <F.Rede src={linkedin} alt="" />
        <F.Rede src={instagram} alt="" />
      </F.Redes>
      </F.ContTopSecond>
      
      </F.ContTop>
      <F.Linha></F.Linha>
      <F.menu>
        <F.LinkMenu href="">Sobre Mim</F.LinkMenu>
        <F.LinkMenu href="">Minhas Tecnologias</F.LinkMenu>
        <F.LinkMenu href="">Projeto</F.LinkMenu>
        <F.LinkMenu href="">Contato</F.LinkMenu>
      </F.menu>
    </F.ContFoo>
  )
}
