import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from '../components/Container';
import { H1, H3, P, AlertText } from '../components/Text';
import { Count } from '../components/Count';
import { ActionButton, StyledActionButton, DeleteButton } from '../components/Button';
import { Footer } from '../components/Footer';
import { setCartItems } from '../redux/reducer/itemSlice';

const PageContainer = styled(Container)`
  top: 5rem;
  text-align: center;
  padding: 0;
`;

const CartList = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};

  > * ~ * {
    margin-top: ${({ theme }) => theme.space.md};
  }

  > ${ActionButton} {
    margin: 2.5rem auto;
  }

  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => theme.space.md};
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 1.875rem;
  }

  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;

const ItemDescription = styled.div`
  text-align: left;
`;

const ItemAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  position: relative;

  ${({ theme }) => theme.media.sm} {
    width: 100%;
    justify-content: space-between;
  }
`;

const CheckOut = styled.div`
  padding: 0 ${({ theme }) => theme.space.lg} 3.75rem
    ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.space.md};

  ${({ theme }) => theme.media.sm} {
    padding: 0 ${({ theme }) => theme.space.md} 3.75rem
      ${({ theme }) => theme.space.md};

    > button {
      margin: 0 auto;
    }
  }
`;

const Total = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.space.md};
  border-top: 0.125rem solid #000;
  text-align: right;

  > * ~ * {
    margin-top: 0.625rem;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  height: 13.75rem;
`;

const GoShoppingButton = styled(StyledActionButton)`
  transition: 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

function CartPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const cartItems = useSelector((store) => store.item.cartItems);
  const itemsPrice = cartItems.reduce(
    (a, cartItem) => a + cartItem.cart * cartItem.price,
    0
  );
  const shippingPrice = itemsPrice >= 1000 || itemsPrice === 0 ? 0 : 60;
  const total = itemsPrice + shippingPrice;

  if (!user) {
    history.push('/');
  }

  const handleClickMinus = (e) => {
    e.preventDefault();
    let cartData;
    const id = parseInt(e.target.attributes.getNamedItem('data-id').value);
    cartData = cartItems.map((cartItem) => {
      return cartItem.id === id
        ? {
          ...cartItem,
          cart: cartItem.cart <= 1 ? 1 : cartItem.cart - 1,
          warning: '',
        }
        : cartItem;
    });

    dispatch(setCartItems(cartData));
  };

  const handleClickPlus = (e) => {
    e.preventDefault();
    let cartData;

    const id = parseInt(e.target.attributes.getNamedItem('data-id').value);
    cartData = cartItems.map((cartItem) => {
      return cartItem.id === id
        ? {
          ...cartItem,
          cart:
            cartItem.cart >= cartItem.quantity
              ? cartItem.quantity
              : cartItem.cart + 1,
          warning: cartItem.cart >= cartItem.quantity ? 'No more stock' : '',
        }
        : cartItem;
    });

    dispatch(setCartItems(cartData));
  };

  const handleDelete = (e) => {
    let cartData;
    const id = parseInt(e.target.attributes.getNamedItem('data-id').value);
    cartData = cartItems.filter((cartItem) => cartItem.id !== id);
    dispatch(setCartItems(cartData));
  };

  return (
    <PageContainer>
      {user ? <H1>{user.nickname}'s Cart</H1> : <H1>My Cart</H1>}

      <CartList>
        {cartItems.length === 0 && (
          <EmptyCart>
            <H1>Cart is Empty</H1>
            <GoShoppingButton as={Link} to={'/shop'}>Go Shopping</GoShoppingButton>
          </EmptyCart>
        )
        }
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id}>
            <ItemContent as={Link} to={`/item/${cartItem.id}`}>
              <img src={cartItem.picture} alt={cartItem.name} as={Link} to={`/item/${cartItem.id}`} />
              <ItemDescription>
                <P>{cartItem.name}</P>
                <P>${cartItem.price}</P>
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Count
                num={cartItem.cart >= cartItem.quantity ? cartItem.quantity : cartItem.cart}
                handleClickPlus={handleClickPlus}
                handleClickMinus={handleClickMinus}
                dataId={cartItem.id}
              />
              <P>${cartItem.cart * cartItem.price}</P>
              <DeleteButton onClick={handleDelete} dataId={cartItem.id} />
              {cartItem.warning && <AlertText>{cartItem.warning}</AlertText>}
            </ItemAction>
          </CartItem>
        ))}
      </CartList>
      {cartItems.length !== 0 && (
        <CheckOut>
          <Total>
            <P>Items Price ${itemsPrice}</P>
            <P>Shipping Price ${shippingPrice}</P>
            <H3>Total Price</H3>
            <H3>${total}</H3>
          </Total>
          <ActionButton content={'Check out'} color={'primary'} />
        </CheckOut>
      )}
      <Footer />
    </PageContainer>
  );
}

export default CartPage;
