import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 700;
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 700;
`;

export const P = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 700;
  line-height: 1.4;
`;

export const Ps = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: 1.4;
`;

export const AlertText = styled(Ps)`
  color: red;
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;
