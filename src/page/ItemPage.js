import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { H1, H3 } from '../components/Text';
import { Count } from '../components/Count';
import { Footer } from '../components/Footer';
import item_1 from '../image/item.png';

const PageContainer = styled(Container)`
  position: absolute;
  top: 5rem;
  padding: 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};
  padding: 0 5rem 5rem 5rem;

  > img {
    flex: 1;

    ${({ theme }) => theme.media.md} {
      width: 100%;
    }
  }

  ${({ theme }) => theme.media.lg} {
    gap: ${({ theme }) => theme.space.md};
  }

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    width: 100%;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 0 2.5rem 2.5rem 2.5rem;
  }
`;

const ItemContent = styled.div`
  flex: 1;

  > ${H3} {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  > * ~ * {
    margin-top: ${({ theme }) => theme.space.md};
  }
`;

const data = [
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
];

function ShopPage() {
  return (
    <>
      <PageContainer>
        <Item>
          <img src={data[0].src} alt={'item_1'}></img>
          <ItemContent>
            <H1>{data[0].name}</H1>
            <H3>{data[0].tag}</H3>
            <H3>{data[0].description}</H3>
            <H1>${data[0].price}</H1>
            <Count />
          </ItemContent>
        </Item>
        <Footer />
      </PageContainer>
    </>
  );
}

export default ShopPage;
