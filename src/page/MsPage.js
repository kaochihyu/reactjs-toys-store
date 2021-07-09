import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { P, Loading } from '../components/Text';
import {
  ActionButton,
  AddItemButton,
  GoToTopButton,
} from '../components/Button';
import { Search } from '../components/Search';
import { EditItemForm } from '../components/EditItemForm';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getItem, deleteItem } from '../redux/reducer/itemSlice';

const PageContainer = styled(Container)`
  top: 9rem;
  text-align: center;
  padding: 0;

  ${({ theme }) => theme.media.sm} {
    top: 13.25rem;
  }
`;

const ItemsList = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};

  > * ~ * {
    margin-top: 10px;
  }

  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => theme.space.md};
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #000;
  padding-right: 10px;
  gap: 10px;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: flex-start;
    padding-right: 0;
  }
`;

const ItemImage = styled.div`
  width: 3.75rem;
  height: 3.75rem;

  > img {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.md} {
    padding: 10px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > p {
    text-align: left;
  }

  > p:nth-child(2) {
    width: 20%;
  }

  > p:nth-child(3) {
    width: 10%;
  }

  > p:nth-child(1),
  p:nth-child(4) {
    width: 10%;
  }

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    padding: 10px;

    > p:nth-child(1),
    p:nth-child(2),
    p:nth-child(3),
    p:nth-child(4) {
      width: initial;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-self: end;
  gap: 10px;
  width: initial;
  margin-right: 0;

  > button {
    width: 6.25rem;
    font-weight: 300;
  }

  ${({ theme }) => theme.media.md} {
    align-self: flex-end;
  }

  ${({ theme }) => theme.media.sm} {
    align-self: center;
  }
`;

const ElementWrapper = styled(Container)`
  position: fixed;
  top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

function MsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [popup, setPopup] = useState(false);
  const items = useSelector((store) => store.item.items);
  const item = useSelector((store) => store.item.item);
  const user = useSelector((store) => store.user.user);
  const isLoadingItem = useSelector((store) => store.item.isLoadingItem);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getItems());
  }, [dispatch]);

  if (isLoadingItem) {
    return <Loading>Loading...</Loading>;
  }

  if (user && user.username !== 'admin') {
    history.push('/');
  }

  const filterItems = (items, search) => {
    if (!search) {
      return items;
    }
    return items.filter((item) => {
      const searched = search.toLowerCase();
      const itemId = item.id.toString();
      const itemName = item.name.toLowerCase();
      const itemPrice = item.price.toLowerCase();
      const itemStock = item.quantity.toLowerCase();
      return (
        itemId.includes(searched) ||
        itemName.includes(searched) ||
        itemPrice.includes(searched) ||
        itemStock.includes(searched)
      );
    });
  };

  const filteredItems = filterItems(items, search);

  const handleDelete = (e) => {
    e.preventDefault();
    const id = e.target.attributes.getNamedItem('data-id').value;
    dispatch(deleteItem(id)).then(() => history.go(0));
  };

  const handelEdit = (e) => {
    const id = e.target.attributes.getNamedItem('data-id').value;
    dispatch(getItem(id)).then(() => setPopup(true));
  };

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <>
      <ElementWrapper>
        <Link to={'/addItem'}>
          <AddItemButton>Add Item +</AddItemButton>
        </Link>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      </ElementWrapper>

      <PageContainer>
        <ItemsList>
          {filteredItems.map((data) => (
            <Item key={data.id}>
              <ItemImage>
                <img src={data.picture} alt={data.name} />
              </ItemImage>
              <ItemContent>
                <P>ID:{data.id}</P>
                <P>{data.name}</P>
                <P>Stock: {data.quantity}</P>
                <P>${data.price}</P>
                <Buttons>
                  <ActionButton
                    content={'Edit'}
                    color={'secondary'}
                    onClick={handelEdit}
                    data={data.id}
                  />
                  <ActionButton
                    content={'Delete'}
                    color={'primary'}
                    onClick={handleDelete}
                    data={data.id}
                  />
                </Buttons>
              </ItemContent>
            </Item>
          ))}
        </ItemsList>
      </PageContainer>
      <GoToTopButton />
      {popup && <EditItemForm handleClose={handleClose} item={item} />}
    </>
  );
}

export default MsPage;
