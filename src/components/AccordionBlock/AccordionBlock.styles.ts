import styled from 'styled-components';

export const AccordionSection = styled.div<{ open: boolean; }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  flex-direction: column;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transition: bottom .8s ease;
  bottom: ${props => (props.open ? "-180px" : "0")};
  color: ${({ theme }) => theme.colors.white};
  p {
    margin: 0.8rem 0 0.5rem;
  }
`;

export const AccordionDate = styled.p`

`;

export const AccordionInfo = styled.p`
  padding-bottom: 1.5rem;
`;

export const Button = styled.button`
  a {
    background-color: white;
    text-decoration: none;
    color: black;
    width: 150px;
    padding: 10px;
    text-align: center;
    @media not all and (pointer: coarse) {
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
`;