import styled from 'styled-components';
import { Container } from './Container';
import { Ps } from './Text';

export const Form = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};
  > * ~ * {
    margin-top: ${({ theme }) => theme.space.sm};
  }
`;

export const FormItem = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space.sm} 0;
  justify-content: center;
  gap: 1rem;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    text-align: left;
  }

  > input {
    min-width: 16.25rem;
    border-bottom: solid 3px #fff;

    &:focus-visible {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Note = styled(Ps)`
  > * {
    text-decoration: underline;
  }
`;
