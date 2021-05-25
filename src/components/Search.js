import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const StyledSearch = styled.div`
  display: flex;
  justify-content: centent;
  align-items: center;
  border-bottom: 0.125rem solid #000;
`;

export const Search = () => {

  return (
    <StyledSearch>
      <input placeholder="Search..." />
      <AiOutlineSearch size={30} />
    </StyledSearch>
  )
}
