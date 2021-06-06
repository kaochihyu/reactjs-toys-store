import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { P } from '../components/Text';
import {
  ActionButton,
  AddItemButton,
  GoToTopButton,
} from '../components/Button';
import { Search } from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, getItems, deleteItem } from '../redux/reducer/itemSlice';

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

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    padding: 10px;
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
  const items = useSelector((store) => store.item.items);
  const user = useSelector((store) => store.user.user);

  if (user && user.username !== 'admin') {
    history.push('/');
  }

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (!items) return null;

  const handleDelete = (e) => {
    e.preventDefault();
    const id = e.target.attributes.getNamedItem('data-id').value;
    dispatch(deleteItem(id)).then(() => history.go(0));
  };

  const handelEdit = (e) => {
    const id = e.target.attributes.getNamedItem('data-id').value;
    history.push(`editItem/${id}`);
  };

  return (
    <>
      <ElementWrapper>
        <Link to={'/addItem'}>
          <AddItemButton>Add Item +</AddItemButton>
        </Link>
        <Search />
      </ElementWrapper>

      <PageContainer>
        <ItemsList>
          {items.map((data) => (
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
    </>
  );
}

export default MsPage;
