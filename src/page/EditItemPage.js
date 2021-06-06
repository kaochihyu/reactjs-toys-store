import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { H2 } from '../components/Text';
import { ArrowButton, ActionButton, FlexWrapper } from '../components/Button';
import { Form, FormItem, FormInput, Note } from '../components/Form';
import { updateItem, getItem } from '../redux/reducer/itemSlice';

const Logo = styled(Link)`
  color: #000;
  font-family: 'Patua One', cursive;
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

const AlertText = styled.div`
  color: red;
`;

function EditItemPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((store) => store.item.item);
  const [itemName, setItemName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [itemTag, setItemTag] = useState(item.tag);
  const [picture, setPicture] = useState(item.picture);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    dispatch(getItem(id))
  }, [id, dispatch])

  console.log(id)

  if (!item) {
    console.log("no item")
  } else {
    console.log("item")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !itemName ||
      !description ||
      !itemTag ||
      !picture ||
      !quantity ||
      !price
    ) {
      setErrorMessage('Something missed');
    } else {
      dispatch(
        updateItem(
          id,
          itemName,
          description,
          itemTag,
          picture,
          quantity,
          price
        )
      ).then(() => {
        history.push('/ms')
      })

    }
  };

  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <PageContainer>
      <BackButton
        bgColor={'black'}
        direction={'left'}
        color={'#fff'}
        handleClick={goToPreviousPath}
      />
      <Form large>
        <Logo as={Link} to={'/'}>
          TOYS
        </Logo>
        <H2>Edit Item</H2>
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
              type="text"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormItem>
          <FormItem small>
            <label htmlFor="price">Price</label>
            <FormInput
              primary
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormItem>
        </FlexWrapper>
        {errorMessage && <AlertText>{errorMessage}</AlertText>}

        <FlexWrapper center>
          <ActionButton color={'secondary'} content={'Cnacel'} />
          <ActionButton
            color={'primary'}
            content={'Save'}
            onClick={handleSubmit}
          />
        </FlexWrapper>
      </Form>
    </PageContainer>
  );
}

export default EditItemPage;
