import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { SearchBar } from '../components/Search';
import { H2, H3, P } from '../components/Text';
import { GoButton, GoToTopButton } from '../components/Button';
import { Footer } from '../components/Footer';
import item_1 from '../image/item.png';

const PageContainer = styled(Container)`
  position: absolute;
  top: 9.5rem;
  padding: 0;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.md} 5rem;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    flex-wrap: initial;
    padding: ${({ theme }) => theme.space.md} 2.5rem;
  }
`;

const Item = styled.div`
  > img {
    width: 100%;
    height: 16.25rem;
  }
`;

const ItemContent = styled.div`
  padding: ${({ theme }) => theme.space.sm} 0;

  > p {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  > * ~ * {
    margin-top: 0.625rem;
  }
`;

const Blank = styled.div`
  width: 16.25rem;
  display: block;
`;

const itemDatas = [
  {
    id: 1,
    name: 'Toys Car',
    tag: '3-5 year',
    price: '100',
    src: item_1,
  },
  {
    id: 2,
    name: 'Toys Car',
    tag: '3-5 year',
    price: '100',
    src: item_1,
  },
  {
    id: 3,
    name: 'Toys Car',
    tag: '3-5 year',
    price: '100',
    src: item_1,
  },
  {
    id: 4,
    name: 'Toys Car',
    tag: '3-5 year',
    price: '100',
    src: item_1,
  },
];

function ShopPage() {
  return (
    <>
      <SearchBar />
      <PageContainer>
        <Items>
          {itemDatas.map((data) => (
            <Item key={data.id}>
              <img src={data.src} alt={data.name} />
              <ItemContent>
                <H3>{data.name}</H3>
                <P>{data.tag}</P>
                <H2>${data.price}</H2>
                <GoButton
                  content={'SEE MORE'}
                  route={'/item'}
                  letter_sp={'small'}
                />
              </ItemContent>
            </Item>
          ))}
          <Blank />
          <Blank />
          <Blank />
        </Items>
        <Footer />
      </PageContainer>
      <GoToTopButton />
    </>
  );
}

export default ShopPage;
