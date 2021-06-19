import React from "react";
import styled from "styled-components";
import { CloseButton, ActionButton, FlexWrapper } from "./Button";

export const OverLay = styled.div`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(transparent, #444);
  z-index: 3;
`;

export const PopupContianer = styled.div`
  position: absolute;
  opacity: 1;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 560px;
  height: 500px;
  background-color: #fff;
  z-index: 5;

  ${({ theme }) => theme.media.md} {
    width: 100%;
    height: 640px;
  }
`;

export const Popup = ({ content, handleClose, handleSubmit, submitContent }) => {
  return (
    <>
      <OverLay />
      <PopupContianer>
        <CloseButton handleClick={handleClose} />
        {content}
        <FlexWrapper center>
          <ActionButton
            color={"secondary"}
            content={"Cnacel"}
            onClick={handleClose}
          />
          <ActionButton
            color={"primary"}
            content={submitContent}
            onClick={handleSubmit}
          />
        </FlexWrapper>
      </PopupContianer>
    </>
  )
}