import styled from 'styled-components';
import { Ps } from './Text';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.large ? '716px' : '400px'};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.md};
  > * ~ * {
    margin-top: ${({ theme }) => theme.space.sm};
  }
`;

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.space.sm} 0;
  justify-content: flex-start;
  gap: 10px;


  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    text-align: left;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border-bottom: solid 3px ${props => props.primary ? "#000" : "#fff"};
  color: ${props => props.primary ? "#000" : "#fff"};
`;

export const Note = styled(Ps)`
  > * {
    text-decoration: underline;
  }
`;
