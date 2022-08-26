import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../globalStyles";

interface IClickCloseMobile {
  click: boolean;
}

export const Nav = styled.header`
  background: #151515;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  padding-left: 70px;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-left: 0;
  height: 50px;
`;

export const MobileIcon = styled.div`
  display: none;
  > svg {
    fill: #ff0000;
  }
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul<IClickCloseMobile>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }
`;

export const NavItem = styled.li`
  font-size: 16px;
  margin-left: 10px;
  height: 80px;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  &:hover {
    border-bottom: 2px solid #ff0000;
    color: #ff0000;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #ff0000;
      transition: all 0.5s ease;
    }
  }
  &:hover {
    color: #ff0000;
    transform: scale(1.05);
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const NavBtnContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    position: inherit;
    bottom: 80px;
    left: 20%;
    right: 20%;
    justify-content: center;
  }
`;

export const NavBtn = styled.button`
  margin-left: 200px;
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 80px;
  width: 140px;
  background: #ff0000;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 1278px) {
    margin-left: 40px;
    max-width: 100vw;
  }

  @media screen and (max-width: 960px) {
    height: 60px;
    align-self: center;
  }
`;
