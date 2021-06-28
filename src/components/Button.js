import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

export const StyledActionButton = styled(Button)`
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

export const AddItemButton = styled(H3)`
  padding: 0.625rem 1.5rem;
  border: 0.125rem solid #000;
  border-radius: 1.5rem;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : 'initial')};
  gap: 1rem;
  width: 100%;
  margin-top: 3.75rem;
  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledDeleteButton = styled(Button)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  transition: 0.1s ease-in-out;
  transform: rotate(45deg);
`;

export const GoButton = ({ content, route, letter_sp }) => {
  return (
    <StyledGoButton as={Link} to={route} letter_sp={letter_sp}>
      <H3>{content}</H3>
      <IoIosArrowRoundForward size={'3rem'} />
    </StyledGoButton>
  );
};

GoButton.propTypes = {
  content: PropTypes.string,
  route: PropTypes.string,
  letter_sp: PropTypes.string,
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

ArrowButton.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  direction: PropTypes.string,
  handleClick: PropTypes.func,
};

export const CloseButton = ({ handleClick }) => {
  return (
    <StyledCloseButton onClick={handleClick}>
      <GrClose size={30} />
    </StyledCloseButton>
  );
};

CloseButton.propTypes = {
  handleClick: PropTypes.func,
};

export const ActionButton = ({ color, content, onClick, data }) => {
  return (
    <StyledActionButton color={color} onClick={onClick} data-id={data}>
      <H3 data-id={data}>{content}</H3>
    </StyledActionButton>
  );
};

ActionButton.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.number,
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

export const DeleteButton = ({ onClick, dataId }) => {
  return (
    <StyledDeleteButton onClick={onClick} data-id={dataId}>
      +
    </StyledDeleteButton>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func,
  dataId: PropTypes.number,
};
