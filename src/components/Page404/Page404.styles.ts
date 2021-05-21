import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";

export const NotFoundContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  ${breakpoint.sm`
    max-width: 80%;
  `}
`;

export const NotFoundError = styled.div`
  font-size: 18px;
`;

export const NotFoundTitle = styled.div`
  font-size: 3rem;
  ${breakpoint.sm`
    font-size: 15rem;
  `}
`;

export const NotFoundText = styled.div`
  font-size: 2rem;
`;