import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/Container";
import { Search, SearchBar } from "../components/Search";
import { H2, H3, P } from "../components/Text";
import { GoButton, GoToTopButton } from "../components/Button";
import { Footer } from "../components/Footer";
import { getItems } from "../redux/reducer/itemSlice";

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

function ShopPage() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.item.items);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getItems());
  }, [dispatch]);

  if (!items) return null;

  const filterItems = (items, search) => {
    if (!search) {
      return items;
    }
    return items.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemTag = item.tag.toLowerCase();
      const itemPrice = item.price.toLowerCase();
      return (
        itemName.includes(search) ||
        itemTag.includes(search) ||
        itemPrice.includes(search)
      );
    });
  };

  const filteredItems = filterItems(items, search);

  return (
    <>
      <SearchBar>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      </SearchBar>
      <PageContainer>
        <Items>
          {filteredItems.map((data) => (
            <Item key={data.id}>
              <img src={data.picture} alt={data.name} />
              <ItemContent>
                <H3>{data.name}</H3>
                <P>{data.tag}</P>
                <H2>${data.price}</H2>
                <GoButton
                  content={"SEE MORE"}
                  route={`/item/${data.id}`}
                  letter_sp={"small"}
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
