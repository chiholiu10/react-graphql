import styled from 'styled-components';

export const AccordionBtn = styled.div<{ open: boolean; }>`
padding: 1rem;
color: white;
background-color: ${props => (props.open ? "grey" : "black")};
@media not all and (pointer: coarse) {
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
`;