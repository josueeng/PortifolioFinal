import * as P from "./Projetos.styled.jsx";
import React from "react";
import portifolio from "../../../assets/imagens/tela.png";
import githu from "../../../assets/imagens/github.png";
import dominio from "../../../assets/imagens/dominio.png";
import selfcare from "../../../assets/imagens/Selfcare.png";
export default function Projetos() {
  return (
    <P.Container>
      Meus Projetos
      <P.Proj>
        <P.Projetos>
          Portifólio pessoal <P.portifolio src={portifolio} alt="" />
          <P.Buttons>
            <P.Links href="https://github.com/josueeng/PortifolioFinal">
              <img src={githu} alt="" />
              Repositório
            </P.Links>
            <P.Links href="https://devjosue.tech/">
              <img src={dominio} alt="Link do meu portifolio" />
              Website
            </P.Links>
          </P.Buttons>
        </P.Projetos>

        <P.Projetos>
          SelfCare <P.portifolio src={selfcare} alt="link do repositorio selfcare" />
          <P.Buttons>
            <P.Links href="https://github.com/josueeng/selfcare">
              <img src={githu} alt="" />
              Repositório
            </P.Links>
            <P.Links href="https://selfcaredesafio.shop/">
              <img src={dominio} alt="" />
              Website
            </P.Links>
          </P.Buttons>
        </P.Projetos>
      </P.Proj>
    </P.Container>
  );
}
