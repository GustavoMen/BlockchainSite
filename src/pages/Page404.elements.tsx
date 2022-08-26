import styled from "styled-components";

export const Container404 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  background: #131212;
  max-width: 100vw;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivTexto = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    align-items: center;
    justify-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 96px;
  padding-bottom: 10px;
  color: #ff0000;

  @media screen and (max-width: 450px) {
    font-size: 52px;
  }
`;

export const SubText = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 10px;

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

export const ContainerRedirect = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 960px) {
    align-items: center;
    justify-items: center;
    flex-direction: column;
  }
`;

export const RedirectText = styled.p`
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const TextOr = styled.span`
  margin-top: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const BackButton = styled.button`
  margin-top: 10px;
  margin-bottom: 100px;
  width: 430px;
  height: 50px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background: #ff0000;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    width: 80%;
    font-size: 16px;
  }
`;

export const DivImg = styled.div`
  margin-bottom: 100px;
`;

export const ImgError = styled.img`
  width: 530px;
`;
