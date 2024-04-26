import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--Dark-Mode, #191919);
  color: white;
  font-size: 2rem;
  @media (max-width: 900px) {
    height: 150vh;
  }
`;

export const Projetos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #333;
  color: white;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Proj = styled.div`
  display: flex;
  width: 100%;
  height: 130vh;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const portifolio = styled.img`
  width: 300px;
  height: 137.8px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
`;

export const Links = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  width: 150px;
  height: 50px;

  color: white;
`;

export const ContB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: green;
`;
