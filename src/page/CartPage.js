import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { H1, H3, P, AlertText } from "../components/Text";
import { Count } from "../components/Count";
import {
  ActionButton,
  StyledActionButton,
  DeleteButton,
} from "../components/Button";
import { Footer } from "../components/Footer";
import { updateUserCart } from "../redux/reducer/userSlice";

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

  > ${AlertText} {
    position: absolute;
    top: 2.75rem;
  }
`;

const CheckOut = styled.div`
  padding: 0 ${({ theme }) => theme.space.lg} 3.75rem
    ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.space.md};

  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => theme.space.md} 3.75rem;
  }

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
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const items = useSelector((store) => store.item.items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!user || !items) {
    return null;
  }

  const userCart = user.cart;
  const cartItemsDatas = userCart.map((data) => {
    const exist = items.find((item) => parseInt(data.id) === parseInt(item.id));
    return {
      ...exist,
      cartItemNum: data.quantity,
      warning: data.warning,
    };
  });

  const itemsPrice = cartItemsDatas.reduce(
    (a, cartItemsData) =>
      a + parseInt(cartItemsData.cartItemNum) * parseInt(cartItemsData.price),
    0
  );
  const shippingPrice = itemsPrice >= 1000 || itemsPrice === 0 ? 0 : 60;
  const total = itemsPrice + shippingPrice;

  const handleClickMinus = (e) => {
    e.preventDefault();
    let cartData;
    const id = parseInt(e.target.attributes.getNamedItem("data-id").value);
    cartData = cartItemsDatas.map((cartItemsData) => {
      return cartItemsData.id === id
        ? {
          id: cartItemsData.id,
          quantity:
            cartItemsData.cartItemNum <= 1
              ? 1
              : cartItemsData.cartItemNum - 1,
          warning: "",
        }
        : {
          id: cartItemsData.id,
          quantity: cartItemsData.cartItemNum,
        };
    });
    dispatch(updateUserCart(user.id, cartData));
  };

  const handleClickPlus = (e) => {
    e.preventDefault();
    let cartData;
    const id = parseInt(e.target.attributes.getNamedItem("data-id").value);
    cartData = cartItemsDatas.map((cartItemsData) => {
      return cartItemsData.id === id
        ? {
          id: cartItemsData.id,
          quantity:
            cartItemsData.cartItemNum >= cartItemsData.quantity
              ? cartItemsData.quantity
              : cartItemsData.cartItemNum + 1,
          warning:
            cartItemsData.cartItemNum >= cartItemsData.quantity
              ? "No more stock"
              : "",
        }
        : {
          id: cartItemsData.id,
          quantity: cartItemsData.cartItemNum,
        };
    });
    dispatch(updateUserCart(user.id, cartData));
  };

  const handleDelete = (e) => {
    let cartData;
    const id = parseInt(e.target.attributes.getNamedItem("data-id").value);
    cartData = userCart.filter((data) => parseInt(data.id) !== parseInt(id));
    dispatch(updateUserCart(user.id, cartData));
  };

  return (
    <PageContainer>
      {user ? <H1>{user.nickname}&apos;s Cart</H1> : <H1>My Cart</H1>}

      <CartList>
        {cartItemsDatas.length === 0 && (
          <EmptyCart>
            <H1>Cart is Empty</H1>
            <GoShoppingButton as={Link} to={"/shop"}>
              Go Shopping
            </GoShoppingButton>
          </EmptyCart>
        )}
        {cartItemsDatas.map((cartItemsData) => (
          <CartItem key={cartItemsData.id}>
            <ItemContent as={Link} to={`/item/${cartItemsData.id}`}>
              <img
                src={cartItemsData.picture}
                alt={cartItemsData.name}
                as={Link}
                to={`/item/${cartItemsData.id}`}
              />
              <ItemDescription>
                <P>{cartItemsData.name}</P>
                <P>${cartItemsData.price}</P>
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Count
                num={
                  parseInt(cartItemsData.cartItemNum) >=
                    parseInt(cartItemsData.quantity)
                    ? cartItemsData.quantity
                    : cartItemsData.cartItemNum
                }
                handleClickPlus={handleClickPlus}
                handleClickMinus={handleClickMinus}
                dataId={cartItemsData.id}
              />
              <P>${cartItemsData.cartItemNum * cartItemsData.price}</P>
              <DeleteButton onClick={handleDelete} dataId={cartItemsData.id} />
              {cartItemsData.warning && (
                <AlertText>{cartItemsData.warning}</AlertText>
              )}
            </ItemAction>
          </CartItem>
        ))}
      </CartList>
      {cartItemsDatas.length !== 0 && (
        <CheckOut>
          <Total>
            <P>Items Price ${itemsPrice}</P>
            <P>Shipping Price ${shippingPrice}</P>
            <H3>Total Price</H3>
            <H3>${total}</H3>
          </Total>
          <ActionButton content={"Check out"} color={"primary"} />
        </CheckOut>
      )}
      <Footer />
    </PageContainer>
  );
}

export default CartPage;
