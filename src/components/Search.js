import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from '../components/Container';

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.5rem;
  border-bottom: 0.125rem solid #000;
`;

export const SearchBar = styled(Container)`
  position: fixed;
  top: 80px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};
  background-color: #fff;

  ${({ theme }) => theme.media.md} {
    justify-content: center;
  }
`;

export const Search = ({ value, onChange }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
      <AiOutlineSearch size={24} />
    </StyledSearch>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
