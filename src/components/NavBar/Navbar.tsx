import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// IMAGES
import Logo from "../../assets/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnContainer,
  NavBtn,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={closeMobileMenu}>
          <NavIcon src={Logo} alt="Logo" />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to="/">Início</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/about">Sobre</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/team">Equipe</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/contact">Contato</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/systems">Demonstrações</NavLinks>
          </NavItem>

          <NavBtnContainer>
            <a href="https://google.com/">
              <NavBtn>Investir</NavBtn>
            </a>
          </NavBtnContainer>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
