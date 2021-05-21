import React from 'react';
import styled from 'styled-components';
import { GrShop } from 'react-icons/gr';
import { AiOutlineMenu } from 'react-icons/ai'
import { Container } from './Container';
import { H3 } from './Text';
import { Link } from 'react-router-dom';

const Nav = styled(Container)`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileMenuIcon = styled(AiOutlineMenu)`
  display: none;
  ${({ theme }) => theme.media.sm} {
    display: inline-block;
  }
`;

const MobileNavLogo = styled.div`
  display: none;
  font-size: 1.5rem;
  font-family: 'Patua One', cursive;
  ${({ theme }) => theme.media.sm} {
    display: inline-block;
  }
`;

const MobileNavItems = styled.div`
  display: none;
  ${({ theme }) => theme.media.sm} {
    dispaly: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const MobileNavItemsContainer = styled.div`
  padding: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  > H3 {
    margin-left: ${(props) => props.theme.space.md};
  }
  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

const NavLogo = styled.div`
  font-size: 2rem;
  font-family: 'Patua One', cursive;
`;

const NavItem = styled(H3)`
  color: ${(props) => props.theme.colors.black};
`;

const NavShopIcon = styled(GrShop)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Navbar() {

  return (
    <Nav>
      <MobileMenuIcon size={30} />
      <MobileNavLogo>
        <Link to="/">TOYS</Link>
      </MobileNavLogo>
      <MobileNavItems>
        <MobileNavItemsContainer>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="shop">Shop</Link>
          </NavItem>
          <NavItem>
            <Link to="login">Login</Link>
          </NavItem>
        </MobileNavItemsContainer>
      </MobileNavItems>


      <NavItems>
        <NavLogo>
          <Link to="/">TOYS</Link>
        </NavLogo>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="shop">Shop</Link>
        </NavItem>
        <NavItem>
          <Link to="login">Login</Link>
        </NavItem>
      </NavItems>
      <Link to="cart">
        <NavShopIcon size={30} />
      </Link>
    </Nav>
  );
}

export default Navbar;
