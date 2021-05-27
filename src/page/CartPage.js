import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { H1, H3, P } from '../components/Text';
import { Count } from '../components/Count';
import { ActionButton, DeleteButton } from '../components/Button';
import { Footer } from '../components/Footer';
import item_1 from '../image/item.png';

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

const itemDatas = [
  {
    id: 1,
    name: 'Toys Car',
    tag: '3-5 year',
    price: '100',
    src: item_1,
    description:
      'Push it, pull it and the car run. It can let child to be trained the arms muscles.',
    stock: 4,
  },
  {
    id: 2,
    name: 'Toys Car',
    tag: '3-5 year',
    price: '100',
    src: item_1,
    description:
      'Push it, pull it and the car run. It can let child to be trained the arms muscles.',
    stock: 4,
  },
];

function CartPage() {
  return (
    <PageContainer>
      <H1>My Cart</H1>

      <CartList>
        {itemDatas.map((data) => (
          <CartItem key={data.id}>
            <ItemContent>
              <img src={data.src} alt={data.name} />
              <ItemDescription>
                <P>{data.name}</P>
                <P>${data.price}</P>
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Count />
              <P>$100</P>
              <DeleteButton />
            </ItemAction>
          </CartItem>
        ))}
      </CartList>
      <CheckOut>
        <Total>
          <H3>Total Price</H3>
          <H3>$100</H3>
        </Total>
        <ActionButton content={'Check out'} color={'primary'} />
      </CheckOut>
      <Footer />
    </PageContainer>
  );
}

export default CartPage;
