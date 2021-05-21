import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";

export const Nav = styled.nav<{ show: boolean; }>`
  width: 100%;
  top: ${(props: { show: boolean; }) => (props.show ? "0" : "-100px")};
  transition: top .800s ease;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem;
  position: fixed;
  box-shadow: 0px 0px 6px 4px rgb(0 0 0 / 10%);
  ${breakpoint.sm`
    top: 0;
  `}
`;

export const Input = styled.input`
  padding: 0.5rem 1.2rem;
  width: 100%;
  border: none;
  border: 2px solid transparent;
  ${breakpoint.sm`
    transition: width 0.5s;
  `}
  @media not all and (pointer: coarse) {
    &:focus {
      outline: none;
      border: 2px solid  ${({ theme }) => theme.colors.outline};
      ${breakpoint.sm`
        width: 400px;
        transition: width 0.5s;
      `}
    }
  }
  ${breakpoint.sm`
    width: 300px;
    padding: 0.8rem 1.6rem;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  `}
`;