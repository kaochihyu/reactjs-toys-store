import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { P } from './Text';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
  padding: 2.5rem 6.25rem;

  > ${P} {
    color: ${(props) => props.theme.colors.gray};
    margin-top: 6.75rem;
    padding-top: 1rem;
    text-align: right;
    border-top: 2px solid ${(props) => props.theme.colors.gray};
  }

  ${({ theme }) => theme.media.md} {
    padding: 3.75rem 2.5rem;

    > ${P} {
      text-align: center;
    }
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.875rem;
  }
`

const Items = styled.div`
  display: flex;
  gap: 2.5rem;
  
  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.875rem;
  }
`;

const Item = styled(P)`
  color: ${(props) => props.theme.colors.gray};
`;

export const Footer = () => {

  return (
    <FooterContainer>
      <ItemsContainer>
        <Item>
          <Link to="/">TOYS</Link>
        </Item>
        <Items>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/shop">Shop</Link>
          </Item>
          <Item>
            <Link to="/login">Login</Link>
          </Item>
          <Item>
            <Link to="/signup">Signup</Link>
          </Item>
          <Item>
            <Link to="/Cart">Cart</Link>
          </Item>
        </Items>
      </ItemsContainer>
      <P>Copyright © 2021 Toys</P>
    </FooterContainer>
  );
}

