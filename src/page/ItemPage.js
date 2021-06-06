import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { H1, H3 } from '../components/Text';
import { Count } from '../components/Count';
import { ActionButton, FlexWrapper } from '../components/Button';
import { Footer } from '../components/Footer';
import { getItem } from '../redux/reducer/itemSlice';

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
    align-items: center;
    width: 100%;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 0 2.5rem 2.5rem 2.5rem;
  }
`;

const ItemContent = styled.div`
  flex: 1;
  width: 100%;

  > ${H3} {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  > * ~ * {
    margin-top: ${({ theme }) => theme.space.md};
  }
`;

function ItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((store) => store.item.item);

  useEffect(() => {
    dispatch(getItem(id))
  }, [id, dispatch])

  if (!item) return null;

  return (
    <PageContainer>
      <Item>
        <img src={item.picture} alt={item.name}></img>
        <ItemContent>
          <H1>{item.name}</H1>
          <H3>{item.tag}</H3>
          <H3>{item.description}</H3>
          <H1>${item.price}</H1>
          <Count />
          <FlexWrapper>
            <ActionButton content={'Add to Cart'} color={'primary'} />
            <ActionButton content={'Buy Now'} color={'secondary'} />
          </FlexWrapper>
        </ItemContent>
      </Item>
      <Footer />
    </PageContainer>
  );
}

export default ItemPage;
