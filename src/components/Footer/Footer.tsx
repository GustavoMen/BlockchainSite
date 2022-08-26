import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsInstagram,
  BsTwitter,
  BsTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FaTelegramPlane, FaBuilding } from "react-icons/fa";

import Logo from "../../assets/logo.png";
import LogoB from "../../assets/logoB.png";
import {
  FooterContainer,
  DivOne,
  ImgLogo,
  TextDivOne,
  DivTwo,
  DivTwoTitle,
  DivTwoLink,
  DivThree,
  DivThreeLogo,
  ContainerSocialMedia,
  LinkSocialMedia,
  SocialMedia,
  DivThreeText,
  DivFour,
  ContainerFourAll,
  DivFourText,
  ContainerDivFour,
  DivFourIcon,
  DivFourTitle,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <DivOne>
        <ImgLogo src={Logo} alt="Logo" />
        <TextDivOne>
          Blockchain Hall é uma empresa de consultoria/gestão de investimentos
          criada com o intuito de ajudar pessoas a começar a investir e alcançar
          a tão desejada liberdade financeira. Invista em um futuro melhor!
        </TextDivOne>
      </DivOne>
      <DivTwo>
        <DivTwoTitle>QUEM SOMOS</DivTwoTitle>
        <DivTwoLink>Quem somos</DivTwoLink>
        <DivTwoLink>Demonstrações</DivTwoLink>
      </DivTwo>

      <DivFour>
        <ContainerFourAll>
          <DivFourTitle>CONTATOS</DivFourTitle>
          <ContainerDivFour>
            <DivFourIcon>
              <FaBuilding />
            </DivFourIcon>
            <DivFourText>
              Rua João Polastri, Número 800 Bairro Cidade Jardim
            </DivFourText>
          </ContainerDivFour>
          <ContainerDivFour>
            <DivFourIcon>
              <BsTelephoneFill />
            </DivFourIcon>
            <DivFourText>(19) 98444-7313</DivFourText>
          </ContainerDivFour>
          <ContainerDivFour>
            <DivFourIcon>
              <BsWhatsapp />
            </DivFourIcon>
            <DivFourText>(11) 5198-2941 (WhatsApp)</DivFourText>
          </ContainerDivFour>
          <ContainerDivFour>
            <DivFourIcon>
              <AiOutlineMail />
            </DivFourIcon>
            <DivFourText>business@blockchainhall.net</DivFourText>
          </ContainerDivFour>
        </ContainerFourAll>
      </DivFour>
      <DivThree>
        <DivThreeLogo src={LogoB} alt="Logo" />
        <ContainerSocialMedia>
          <LinkSocialMedia>
            <SocialMedia>
              <BsTwitter />
            </SocialMedia>
          </LinkSocialMedia>
          <LinkSocialMedia>
            <SocialMedia>
              <BsInstagram />
            </SocialMedia>
          </LinkSocialMedia>
          <LinkSocialMedia>
            <SocialMedia>
              <FaTelegramPlane />
            </SocialMedia>
          </LinkSocialMedia>
        </ContainerSocialMedia>
        <DivThreeText>
          © 2022 Blockchain Hall Investimentos LTDA, Blockchain Hall e qualquer
          logo associado são marcas comerciais, marcas de serviço e/ou marcas
          registradas da Blockchain Hall
        </DivThreeText>
      </DivThree>
    </FooterContainer>
  );
}

export default Footer;
