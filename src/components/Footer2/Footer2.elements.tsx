import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #151515;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 165px 165px;
  grid-template-areas:
    "block quemsomos contatos"
    "block mainfooter contatos";

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivOne = styled.div`
  grid-area: block;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 50px;
  justify-items: start;
  align-self: center;

  @media screen and (max-width: 960px) {
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 0;
  }
`;

export const ImgLogo = styled.img`
  width: 180px;
`;

export const TextDivOne = styled.p`
  font-size: 12px;
  color: #fff;
  text-align: start;
  margin-top: 15px;
`;

/// /////////////////////

export const DivTwo = styled.div`
  grid-area: quemsomos;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-left: 50px;
  align-self: flex-end;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    align-self: center;
    padding-left: 0;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 960px) {
    margin-top: 50px;
    padding-left: 0;
    align-items: center;
    justify-items: center;
  }
`;

export const DivTwoTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const DivTwoLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

/// //////////////////////////////////////////////////

export const DivFour = styled.div`
  grid-area: contatos;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-self: center;
  margin-bottom: 20px;
  @media screen and (max-width: 960px) {
    margin-top: 50px;
    margin-left: 0;
    align-items: center;
    justify-items: center;
  }
`;

export const ContainerFourAll = styled.div`
  width: 200px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const DivFourTitle = styled.h3`
  color: #fff;
  font-size: 16px;
`;

export const ContainerDivFour = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 15px;
`;

export const DivFourIcon = styled.div`
  width: 31px;
  transition: 0.3s;

  > svg {
    fill: #fff;
  }
`;

export const DivFourText = styled.p`
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
`;
export const DivFourAdress = styled.p`
  color: #fff;
  font-size: 12px;
  margin-left: 20px;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;

/// //////////////////////////////////////////////////

export const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: mainfooter;
  justify-items: flex-end;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin-top: 50px;
    padding-bottom: 20px;
  }
`;

export const DivThreeLogo = styled.img`
  width: 82px;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
`;

export const LinkSocialMedia = styled.a`
  text-decoration: none;
`;

export const SocialMedia = styled.div`
  width: 31px;
  transition: 0.3s;
  cursor: pointer;
  > svg {
    fill: #fff;
  }

  &:hover {
    > svg {
      fill: #ff0000;
    }
  }
`;

export const DivThreeText = styled.span`
  max-width: 540px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  justify-self: center;

  @media screen and (max-width: 960px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
