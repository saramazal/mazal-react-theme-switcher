import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 32px;
  width: auto;
  height: 100%;

  ${(props) =>
    props.fluid &&
    css`
      padding-right: 20px;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.center &&
    css`
      justify-content: right;
    `};
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;
