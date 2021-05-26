import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 5rem;
  padding-right: 5rem;

  ${({ theme }) => theme.media.sm} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;
