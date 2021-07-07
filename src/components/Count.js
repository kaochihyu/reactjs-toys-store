import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Operation = styled.button`
  width: 40px;
  font-size: 1.25rem;
  color: ${(props) => props.color};
`;

const StyledCount = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border: 1px solid #000;

  > * {
    width: 40px;
    height: 40px;
    text-align: center;
  }

  > * ~ * {
    border-left: 1px solid #000;
  }
`;

const CountNum = styled.div`
  padding: 10px;
`;

export const Count = (props) => {
  const { num, handleClickPlus, handleClickMinus, dataId } = props;

  return (
    <StyledCount>
      <Operation
        data-id={dataId}
        onClick={handleClickMinus}
        color={num == 1 ? '#ccc' : '#000'}
      >
        &#8722;
      </Operation>
      <CountNum>{num}</CountNum>
      <Operation data-id={dataId} onClick={handleClickPlus}>
        &#43;
      </Operation>
    </StyledCount>
  );
};

Count.propTypes = {
  num: PropTypes.number,
  handleClickPlus: PropTypes.func,
  handleClickMinus: PropTypes.func,
  dataId: PropTypes.number,
};
