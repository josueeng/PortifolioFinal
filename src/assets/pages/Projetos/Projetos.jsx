import * as P from "./Projetos.styled.jsx";
import React from "react";
import portifolio from "../../../assets/imagens/tela.png";
import githu from "../../../assets/imagens/github.png";
import dominio from "../../../assets/imagens/dominio.png";
export default function Projetos() {
  return (
    <P.Container>
      Meus Projetos
      <P.Proj>
        <P.Projetos>
          Portifólio pessoal <P.portifolio src={portifolio} alt="" />
          <P.Buttons>
            <P.Links href="">
              <img src={githu} alt="" />
              Repositório
            </P.Links>
            <P.Links href="">
              <img src={dominio} alt="" />
              Website
            </P.Links>
          </P.Buttons>
        </P.Projetos>
        <P.Projetos>
          Portifólio pessoal <P.portifolio src={portifolio} alt="" />
        </P.Projetos>
        <P.Projetos>
          Portifólio pessoal <P.portifolio src={portifolio} alt="" />
        </P.Projetos>
      </P.Proj>
    </P.Container>
  );
}
