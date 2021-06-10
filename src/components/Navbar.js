import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrShop } from 'react-icons/gr';
import { AiOutlineMenu } from 'react-icons/ai';
import { Container } from './Container';
import { H3 } from './Text';
import { CloseButton } from './Button';
import { setAuthToken } from '../utils';
import { setUser } from '../redux/reducer/userSlice';

const Nav = styled(Container)`
  position: fixed;
  top: 0;
  height: 5rem;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  transition: 0.1s ease-in;

  &.scroll {
    background-color: white;
  }

  > a {
    position: relative;
  }
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
  position: fixed;
  top: 0;
  width: 100%;
  height: 25rem;
  background-color: ${(props) => props.theme.colors.black};

  &.open {
    left: 0;
    transition: 0.3s ease-out;
  }

  &.close {
    left: -100%;
    transition: 0.3s ease-out;
  }

  ${H3} {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: ${(props) => props.theme.space.md};
  }
  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const MobileNavItemsContainer = styled.div`
  padding: 5rem 0;
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
  font-size: 1.5rem;
  font-family: 'Patua One', cursive;
`;

const NavItem = styled(H3)`
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;

const NavCart = styled(Link)`
  &.hidden {
    visibility: hidden;
  }
`;

const NavCartIcon = styled(GrShop)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartItemsNum = styled.div`
  position: absolute;
  top: -0.35rem;
  left: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  color: #fff;
  background-color: #fa2222;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm}
`;

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch('/editItem/:id');
  const [scroll, setScroll] = useState(false);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const cartItems = useSelector((store) => store.item.cartItems);
  let admin;

  if (user && user.username === 'admin') {
    admin = user.username;
  }

  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/addItem' ||
    (match && match.path === '/editItem/:id')
  ) {
    return null;
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const handleClick = () => {
    setClick(!click);
  };

  const handleLogout = () => {
    setAuthToken('');
    dispatch(setUser(''));
    if (location.pathname !== '/') {
      history.push('/');
    }
    setClick(false);
  };

  return (
    <Nav className={scroll ? 'scroll' : ''}>
      <MobileMenuIcon size={30} onClick={handleClick} />
      <MobileNavLogo>
        <Link to="/">TOYS</Link>
      </MobileNavLogo>
      <MobileNavItems className={click ? 'open' : 'close'}>
        <MobileNavItemsContainer>
          <CloseButton handleClick={handleClick} />
          <NavItem onClick={() => setClick(false)}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem onClick={() => setClick(false)}>
            <Link to="/shop">Shop</Link>
          </NavItem>
          {admin && (
            <NavItem onClick={() => setClick(false)}>
              <Link to="/ms">Management</Link>
            </NavItem>
          )}
          {user && <NavItem onClick={handleLogout}>Logout</NavItem>}
          {!user && (
            <NavItem onClick={() => setClick(false)}>
              <Link to="/login">Login</Link>
            </NavItem>
          )}
          {!user && (
            <NavItem onClick={() => setClick(false)}>
              <Link to="/signup">Signup</Link>
            </NavItem>
          )}
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
          <Link to="/shop">Shop</Link>
        </NavItem>
        {admin && (
          <NavItem onClick={() => setClick(false)}>
            <Link to="/ms">Management</Link>
          </NavItem>
        )}
        {user && <NavItem onClick={handleLogout}>Logout</NavItem>}
        {!user && (
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        )}
        {!user && (
          <NavItem>
            <Link to="/signup">Signup</Link>
          </NavItem>
        )}
      </NavItems>
      <NavCart to="/cart" className={user ? '' : 'hidden'}>
        <NavCartIcon size={22} />
        {cartItems.length > 0 && (<CartItemsNum>{cartItems.length}</CartItemsNum>)}
      </NavCart>
    </Nav>
  );
}

export default Navbar;
