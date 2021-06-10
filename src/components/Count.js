import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Operation = styled.button`
  width: 40px;
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
    padding: 10px;
    text-align: center;
  }

  > * ~ * {
    border-left: 1px solid #000;
  }
`;

export const Count = (props) => {
  const { num, handleClickPlus, handleClickMinus, dataId } = props;

  return (
    <StyledCount>
      <Operation data-id={dataId} onClick={handleClickMinus}>
        <AiOutlineMinus data-id={dataId} />
      </Operation>
      <div>{num}</div>
      <Operation data-id={dataId} onClick={handleClickPlus}>
        <AiOutlinePlus data-id={dataId} />
      </Operation>
    </StyledCount>
  );
};
