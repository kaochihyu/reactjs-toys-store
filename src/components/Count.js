import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Operation = styled.button`
  width: 40px;
`;

const StyledCount = styled.div`
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

const stock = 5;

export const Count = () => {
  const [nums, setNums] = useState(1);

  const handleClickMinus = () => {
    setNums(nums - 1);
    if (nums <= 1) {
      setNums(1);
    }
  };

  const handleClickPlus = () => {
    setNums(nums + 1);
    if (nums >= stock) {
      setNums(stock);
    }
  };

  return (
    <StyledCount>
      <Operation onClick={handleClickMinus}>
        <AiOutlineMinus />
      </Operation>
      <div>{nums}</div>
      <Operation onClick={handleClickPlus}>
        <AiOutlinePlus />
      </Operation>
    </StyledCount>
  );
};
