import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: bold;
`;

export const P = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: bold;
`;

export const Ps = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
`;