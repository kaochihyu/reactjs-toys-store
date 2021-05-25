import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Search } from '../components/Search';
import { H2, H3, P } from '../components/Text';
import item_1 from '../image/item.png';

const PageContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  position: absolute;
  top: 9.375rem;
  left: 50%;
  transform: translateX(-50%);
`;

const SearchBar = styled(Container)`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};

  ${({ theme }) => theme.media.md} {
    justify-content: center;
  }
`;

const Items = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.md};

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
  }
`;

const Item = styled.div`
`;

const ItemContainer = styled.div`

  > img {
    width: 100%;
    height: 16.25rem;
  }
`;

const ItemContent = styled.div`
  padding: ${({ theme }) => theme.space.md} 0;

  > * ~ * {
    margin-top: 0.625rem;
  }

`;

const Blank = styled.div`
  width: 16.25rem;
  display: block;
`;

function ShopPage() {
  return (
    <PageContainer>
      <SearchBar>
        <Search />
      </SearchBar>
      <Items>
        <Item>
          <ItemContainer>
            <img src={item_1} alt={"item_img"} />
            <ItemContent>
              <H3>Toy Car</H3>
              <P>3 - 5 year</P>
              <H2>$100</H2>
              <button>See More</button>
            </ItemContent>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <img src={item_1} alt={"item_img"} />
            <ItemContent>
              <H3>Toy Car</H3>
              <P>3 - 5 year</P>
              <H2>$100</H2>
              <button>See More</button>
            </ItemContent>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <img src={item_1} alt={"item_img"} />
            <ItemContent>
              <H3>Toy Car</H3>
              <P>3 - 5 year</P>
              <H2>$100</H2>
              <button>See More</button>
            </ItemContent>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <img src={item_1} alt={"item_img"} />
            <ItemContent>
              <H3>Toy Car</H3>
              <P>3 - 5 year</P>
              <H2>$100</H2>
              <button>See More</button>
            </ItemContent>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <img src={item_1} alt={"item_img"} />
            <ItemContent>
              <H3>Toy Car</H3>
              <P>3 - 5 year</P>
              <H2>$100</H2>
              <button>See More</button>
            </ItemContent>
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <img src={item_1} alt={"item_img"} />
            <ItemContent>
              <H3>Toy Car</H3>
              <P>3 - 5 year</P>
              <H2>$100</H2>
              <button>See More</button>
            </ItemContent>
          </ItemContainer>
        </Item>
        <Blank />
        <Blank />
        <Blank />
      </Items>
    </PageContainer>
  )
}

export default ShopPage;