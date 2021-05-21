import React from 'react';
import styled from 'styled-components';
import { GrShop } from 'react-icons/gr';
import { Container } from './Container';
import { H3 } from './Text';

const Nav = styled(Container)`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  > H3 {
    margin-left: ${props => props.theme.space.md}
  }
`;

const NavLogo = styled.div`
  font-size: 2rem;
  font-family: 'Patua One', cursive;
`

const NavItem = styled(H3)`
  color: ${props => props.theme.colors.black};
  
`;

const NavIcon = styled.div`
`;

function Navbar() {
  return (
    <Nav>
      <NavbarItems>
        <NavLogo>TOYS</NavLogo>
        <NavItem>Home</NavItem>
        <NavItem>Shop</NavItem>
        <NavItem>Login</NavItem>
      </NavbarItems>
      <NavIcon>
        <GrShop  size={30}/>
      </NavIcon>
    </Nav>
  )
}

export default Navbar;