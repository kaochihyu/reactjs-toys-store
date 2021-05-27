import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { H3 } from './Text';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const move = keyframes`
  50% {
    transform: translateX(-1.25rem);
  }
`;

const StyledGoButton = styled(Button)`
  width: 100%;
  justify-content: space-between;
  letter-spacing: ${(props) =>
    props.letter_sp === 'small' ? '0.3em' : '1.2em'};
  text-align: left;

  &:hover {
    > svg {
      animation: 1s ${move} ease-in-out infinite both;
    }
  }

  ${({ theme }) => theme.media.md} {
    letter-spacing: 0.3em;
  }
`;

const StyledArrowButton = styled(Button)`
  width: 3.75rem;
  height: 3.75rem;
  background-color: ${(props) =>
    props.bgColor === 'white' ? 'white' : 'black'};
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
  width: 10rem;
  padding: 0.5rem 1rem;
  color: ${(props) => (props.color === 'primary' ? '#fff' : '#000')};
  background-color: ${(props) => (props.color === 'primary' ? '#000' : '#fff')};
  border: 1px solid #000;
`;

const StyledGoToTopButton = styled(StyledArrowButton)`
  position: fixed;
  right: 0;
  bottom: 0;

  ${({ theme }) => theme.media.sm} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const StyledDeleteButton = styled(Button)``;

export const GoButton = ({ content, route, letter_sp }) => {
  return (
    <StyledGoButton as={Link} to={route} letter_sp={letter_sp}>
      <H3>{content}</H3>
      <IoIosArrowRoundForward size={'3rem'} />
    </StyledGoButton>
  );
};

export const ArrowButton = ({ bgColor, color, direction, handleClick }) => {
  return (
    <StyledArrowButton bgColor={bgColor} onClick={handleClick}>
      {direction === 'left' ? (
        <RiArrowLeftSLine size={'3rem'} color={color} />
      ) : (
        <RiArrowRightSLine size={'3rem'} color={color} />
      )}
    </StyledArrowButton>
  );
};

export const CloseButton = ({ handleClick }) => {
  return (
    <StyledCloseButton onClick={handleClick}>
      <GrClose size={30} />
    </StyledCloseButton>
  );
};

export const ActionButton = ({ color, content }) => {
  return (
    <StyledActionButton color={color}>
      <H3>{content}</H3>
    </StyledActionButton>
  );
};

export const GoToTopButton = () => {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledGoToTopButton bgColor={'black'} onClick={handleToTop}>
      <RiArrowUpSLine size={'3rem'} color={'#fff'} />
    </StyledGoToTopButton>
  );
};

export const DeleteButton = () => {
  return (
    <StyledDeleteButton>
      <GrClose size={22} />
    </StyledDeleteButton>
  );
};
