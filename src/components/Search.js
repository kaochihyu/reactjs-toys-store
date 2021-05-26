import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from '../components/Container';

const StyledSearch = styled.div`
  display: flex;
  justify-content: centent;
  align-items: center;
  width: 14.5rem;
  border-bottom: 0.125rem solid #000;
`;

const StyledSearchBar = styled(Container)`
  position: fixed;
  top: 80px;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};
  background-color: #fff;

  ${({ theme }) => theme.media.md} {
    justify-content: center;
  }
`;

export const Search = () => {
  return (
    <StyledSearch>
      <input placeholder="Search..." />
      <AiOutlineSearch size={30} />
    </StyledSearch>
  );
};

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Search />
    </StyledSearchBar>
  );
};
