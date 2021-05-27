import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { P } from '../components/Text';
import { ActionButton } from '../components/Button';
import { SearchBar } from '../components/Search';
import item_1 from '../image/item.png';

const PageContainer = styled(Container)`
  top: 9rem;
  text-align: center;
  padding: 0;
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

function MsPage() {
  return (
    <>
      <SearchBar />
      <PageContainer>
        <ItemsList>
          {itemDatas.map((data) => (
            <Item>
              <ItemImage>
                <img src={data.src} alt={data.name} />
              </ItemImage>
              <ItemContent>
                <P>ID:{data.id}</P>
                <P>{data.name}</P>
                <P>Stock: {data.stock}</P>
                <P>${data.price}</P>
                <Buttons>
                  <ActionButton content={'Edit'} color={'secondary'} />
                  <ActionButton content={'Delete'} color={'primary'} />
                </Buttons>
              </ItemContent>
            </Item>
          ))}
        </ItemsList>
      </PageContainer>
    </>
  );
}

export default MsPage;
