import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #151515;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  height: 300px;
  bottom: 0;
  align-content: center;
  position: relative;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: 730px;
    align-items: center;
    justify-items: center;
  }
`;

export const DivOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-items: center;
  margin-left: 30px;

  @media screen and (max-width: 960px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

export const ImgLogo = styled.img`
  width: 180px;
`;

export const TextDivOne = styled.p`
  font-size: 12px;
  color: #fff;
  text-align: center;
`;

/// /////

export const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-left: 60px;

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

/// //////////////

export const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  justify-items: center;
  align-items: center;
  height: 150px;
  margin-top: 50px;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 960px) {
    position: inherit;
    height: 170px;
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
  width: 540px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  justify-self: center;
`;

/// /////////////////

export const DivFour = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 60px;
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
  margin-top: 10px;
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
`;
