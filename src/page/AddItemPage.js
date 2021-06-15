import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { H2, AlertText } from "../components/Text";
import { ArrowButton, ActionButton, FlexWrapper } from "../components/Button";
import { Form, FormItem, FormInput } from "../components/Form";
import { addItem } from "../redux/reducer/itemSlice";

const Logo = styled(Link)`
  color: #000;
  font-family: "Patua One", cursive;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const BackButton = styled(ArrowButton)`
  position: absolute;
  top: 0;
  left: 0;
`;

function AddItemPage() {
  const history = useHistory();
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [itemTag, setItemTag] = useState("");
  const [picture, setPicture] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [warning, setWarning] = useState();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (user && user.username !== "admin") {
    history.push("/");
  }

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/ms");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !itemName ||
      !description ||
      !itemTag ||
      !picture ||
      !quantity ||
      !price
    ) {
      setWarning("Something missed");
    } else {
      dispatch(
        addItem(itemName, description, itemTag, picture, quantity, price)
      ).then(() => {
        history.push("/ms");
      });
    }
  };

  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <PageContainer>
      <BackButton
        bgColor={"black"}
        direction={"left"}
        color={"#fff"}
        handleClick={goToPreviousPath}
      />
      <Form large>
        <Logo as={Link} to={"/"}>
          TOYS
        </Logo>
        <H2>Add New Item</H2>
        <FormItem large>
          <label htmlFor="itemName">Item Name</label>
          <FormInput
            primary
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </FormItem>

        <FormItem large>
          <label htmlFor="description">Description</label>
          <FormInput
            primary
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormItem>
        <FormItem large>
          <label htmlFor="itemTag">Item Tag</label>
          <FormInput
            primary
            type="text"
            id="itemTag"
            value={itemTag}
            onChange={(e) => setItemTag(e.target.value)}
          />
        </FormItem>
        <FormItem large>
          <label htmlFor="picture">Picture</label>
          <FormInput
            primary
            type="text"
            id="picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </FormItem>
        <FlexWrapper>
          <FormItem small>
            <label htmlFor="quantity">Quantity</label>
            <FormInput
              primary
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormItem>
          <FormItem small>
            <label htmlFor="price">Price</label>
            <FormInput
              primary
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormItem>
        </FlexWrapper>
        {warning && <AlertText>{warning}</AlertText>}

        <FlexWrapper center>
          <ActionButton
            color={"secondary"}
            content={"Cnacel"}
            onClick={handleCancel}
          />
          <ActionButton
            color={"primary"}
            content={"Save"}
            onClick={handleSubmit}
          />
        </FlexWrapper>
      </Form>
    </PageContainer>
  );
}

export default AddItemPage;
