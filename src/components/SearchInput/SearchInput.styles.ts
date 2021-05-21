import styled from 'styled-components';

export const Label = styled.label<{ show: boolean; }>`
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: ${props => (props.show ? "0" : "-100px")};
  transition: top .800s ease;
  background-color: lightgrey;
`;

export const Input = styled.input<{ show: boolean; }>`
  padding: 0.5rem;
  width: 100%;
  height: auto;
`;