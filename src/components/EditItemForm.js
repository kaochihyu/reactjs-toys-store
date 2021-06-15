import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActionButton, CloseButton, FlexWrapper } from "./Button";
import { H3, AlertText } from "./Text";
import { updateItem } from "../redux/reducer/itemSlice";

const OverLay = styled.div`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(transparent, #444);
  z-index: 3;
`;

const PopupContianer = styled.div`
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

const PopupForm = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  text-align: center;
  padding: 0 40px;
`;

const ItemList = styled.div`
  margin-top: 20px;
  text-align: left;

  > * ~ * {
    margin-top: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  > input {
    padding: 4px 10px;
    border-radius: 2px;
    border: 1px solid #000;
    font-size: 0.83rem;
    font-family: Arial;
    font-weight: 400;

    &:focus-visible {
      outline: #000 auto 1px;
    }
  }

  > textarea {
    resize: none;
    padding: 4px 10px;
    border-radius: 2px;
    border: 1px solid #000;
  }

  > ${FlexWrapper} {
    justify-content: space-between;
  }

  &.medium {
    width: 60%;
    ${({ theme }) => theme.media.sm} {
      width: 100%;
    }
  }

  &.small {
    width: 20%;
    ${({ theme }) => theme.media.sm} {
      width: 100%;
    }
  }
`;

export const EditItemForm = ({ handleClose, item }) => {
  const [itemName, setItemName] = useState(item.name);
  const [itemDescription, setItemDescription] = useState(item.description);
  const [itemTag, setItemTag] = useState(item.tag);
  const [itemPicture, setItemPicture] = useState(item.picture);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [itemPrice, setItemPrice] = useState(item.price);
  const [warning, setWarning] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !itemName ||
      !itemDescription ||
      !itemTag ||
      !itemPicture ||
      !itemQuantity ||
      !itemPrice
    ) {
      setWarning("Something missed");
    } else {
      dispatch(
        updateItem(
          item.id,
          itemName,
          itemDescription,
          itemTag,
          itemPicture,
          itemQuantity,
          itemPrice
        )
      ).then(() => {
        history.go(0);
      });
    }
  };

  return (
    <>
      <OverLay />
      <PopupContianer>
        <CloseButton handleClick={handleClose} />
        <PopupForm>
          <H3>Edit Item ID:{item.id}</H3>
          <ItemList>
            <Item>
              <label htmlFor="itemName">Name</label>
              <input
                type="text"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Item>

            <Item>
              <label htmlFor="itemDescription">Description</label>
              <textarea
                rows="5"
                id="itemDescription"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
              />
            </Item>

            <Item>
              <label htmlFor="itemPicture">Picture</label>
              <input
                type="text"
                id="itemPicture"
                value={itemPicture}
                onChange={(e) => setItemPicture(e.target.value)}
              />
            </Item>

            <FlexWrapper>
              <Item className="medium">
                <label htmlFor="itemTag">Tag</label>
                <input
                  type="text"
                  id="itemTag"
                  value={itemTag}
                  onChange={(e) => setItemTag(e.target.value)}
                />
              </Item>
              <Item className="small">
                <label htmlFor="itemQuantity">Quantity</label>
                <input
                  type="number"
                  id="itemQuantity"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                />
              </Item>
              <Item className="small">
                <label htmlFor="itemPrice">Price</label>
                <input
                  type="number"
                  id="itemPrice"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                />
              </Item>
            </FlexWrapper>
            {warning && <AlertText>{warning}</AlertText>}
          </ItemList>
          <FlexWrapper center>
            <ActionButton
              color={"secondary"}
              content={"Cnacel"}
              onClick={handleClose}
            />
            <ActionButton
              color={"primary"}
              content={"Save"}
              onClick={handleSubmit}
            />
          </FlexWrapper>
        </PopupForm>
      </PopupContianer>
    </>
  );
};
