import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;

  ${({theme}) => theme.media.sm} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;