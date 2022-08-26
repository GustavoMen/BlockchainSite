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
            <NavLinks to="/">Home</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/products">Produtos</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/location">Locação</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/services">Serviços</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/systems">Sistemas</NavLinks>
          </NavItem>

          <NavBtnContainer>
            <NavBtn>Investir</NavBtn>
          </NavBtnContainer>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
