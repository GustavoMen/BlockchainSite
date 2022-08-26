import React from "react";

import imgErr from "../assets/ErrorImage.png";
import CountDown from "../components/CountDown/CountDown";
import {
  Container404,
  DivTexto,
  Title,
  SubText,
  RedirectText,
  TextOr,
  BackButton,
  ContainerRedirect,
  DivImg,
  ImgError,
} from "./Page404.elements";

function Page404() {
  return (
    <Container404>
      <DivTexto>
        <Title>Error404</Title>
        <SubText>
          Nossa equipe de investidores não encontrou essa página.
        </SubText>
        <ContainerRedirect>
          <RedirectText>
            Vamos te redirecionar para página inicial em
          </RedirectText>
          <CountDown />
        </ContainerRedirect>
        <TextOr>ou</TextOr>
        <BackButton>Voltar para a página inicial</BackButton>
      </DivTexto>
      <DivImg>
        <ImgError src={imgErr} alt="Image error" />
      </DivImg>
    </Container404>
  );
}

export default Page404;
