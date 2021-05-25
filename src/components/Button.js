import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { H2, H3 } from './Text';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const move = keyframes`
  50% {
    transform: translateX(20px);
  }
`;

const StyledGoButton = styled(Button)`
  width: 100%;
  justify-content: space-between;
  letter-spacing: 1.2em;
  text-align: left;

  &:hover {
    > svg {
      animation: 1s ${move} ease-in-out infinite both;
    } 
  }

  ${({ theme }) => theme.media.md} {
    letter-spacing: 0.3rem;
  }
`;

const StyledArrowButton = styled(Button)`
  width: 3.75rem;
  height: 3.75rem;
  background-color: ${props => props.bgColor === 'white' ? 'white' : 'black'}
`;

const StyledCloseButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  width: 3.75rem;
  height: 3.75rem;
  background-color: #fff;
`;

const StyledActionButton = styled(Button)`
  width: 16.25rem;
  padding: 1rem;
  background-color: ${props => props.color === 'primary' ? '#fff' : '#000'};
  background-color: ${props => props.color === 'primary' ? '#000' : '#fff'};
`;

export const GoButton = ({ content, route }) => {
  return (
    <StyledGoButton as={Link} to={route}>
      <H3>{content}</H3>
      <IoIosArrowRoundForward size={'3rem'} />
    </StyledGoButton>
  )
};

export const ArrowButton = ({ bgColor, color, direction, handleClick }) => {

  return (
    <StyledArrowButton bgColor={bgColor} onClick={handleClick}>
      {direction === 'left'
        ?
        <RiArrowLeftSLine size={'3rem'} color={color} />
        :
        <RiArrowRightSLine size={'3rem'} color={color} />
      }

    </StyledArrowButton>
  )
}

export const CloseButton = ({ handleClick }) => {
  return (
    <StyledCloseButton onClick={handleClick}>
      <GrClose size={30} />
    </StyledCloseButton>
  )
}

export const ActionButton = ({ color, content }) => {
  return (
    <StyledActionButton color={color}>
      <H2>{content}</H2>
    </StyledActionButton>
  )
}


