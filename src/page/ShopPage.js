import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Search, ElementWrapper } from '../components/Search';
import { H2, H3, P, Loading } from '../components/Text';
import { GoButton, GoToTopButton } from '../components/Button';
import { Footer } from '../components/Footer';
import { getItems } from '../redux/reducer/itemSlice';

const PageContainer = styled(Container)`
  position: absolute;
  top: 9.5rem;
  padding: 0;s
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    flex-wrap: initial;
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  }
`;

const Item = styled.div`
  > img {
    width: 12.5rem;
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
  width: 12.5rem;
  display: block;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    margin-right: 10px;
  }
`;

const FilterButton = styled.button`
  padding: 6px;
  border: 1px solid #000;
  color: #000;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  &.active {
    color: #fff;
    background-color: #000;
  }
`;

const AGE_MAP = ['2-6', '4-8', '5-12'];

function ShopPage() {
  const [search, setSearch] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((store) => store.item.items);
  const isLoadingItem = useSelector((store) => store.item.isLoadingItem);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getItems());
  }, [dispatch]);

  if (isLoadingItem) {
    return <Loading>Loading...</Loading>;
  }

  const searchItems = (items, search, ageFilter) => {
    if (!search && !ageFilter) {
      return items;
    }
    return items.filter((item) => {
      const searched = search.toLowerCase();
      const itemName = item.name.toLowerCase();
      const itemTag = item.tag.toLowerCase();

      if (!search && ageFilter) {
        return itemTag.includes(ageFilter);
      }

      if (!ageFilter && searched) {
        return itemName.includes(searched);
      }
      return itemTag.includes(ageFilter) && itemName.includes(searched);
    });
  };

  const searchedItems = searchItems(items, search, ageFilter);

  return (
    <>
      <ElementWrapper>
        <FilterButtons>
          <H3>Age</H3>
          <FilterButton
            value={'All'}
            onClick={() => setAgeFilter('')}
            className={ageFilter === '' ? 'active' : ''}
          >
            All
          </FilterButton>
          {AGE_MAP.map((age) => (
            <FilterButton
              key={age}
              value={age}
              onClick={(e) => setAgeFilter(e.target.value)}
              className={ageFilter === age ? 'active' : ''}
            >
              {age}
            </FilterButton>
          ))}
        </FilterButtons>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      </ElementWrapper>
      <PageContainer>
        <Items>
          {searchedItems.map((data) => (
            <Item key={data.id}>
              <img src={data.picture} alt={data.name} />
              <ItemContent>
                <H3>{data.name}</H3>
                <P>{data.tag}</P>
                <H2>${data.price}</H2>
                <GoButton
                  content={'SEE MORE'}
                  route={`/item/${data.id}`}
                  letter_sp={'small'}
                />
              </ItemContent>
            </Item>
          ))}
          <Blank />
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
