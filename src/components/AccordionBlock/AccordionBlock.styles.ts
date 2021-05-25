import styled from 'styled-components';
import theme from '../../styles/Themes';

export const AccordionSection = styled.div<{ open: boolean; }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  flex-direction: column;
  padding: 1rem;
  transition: bottom .8s ease;
  bottom: ${props => (props.open ? "-180px" : "0")};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${theme.colors.darkGrey};
  color: ${theme.colors.white};
  p {
    margin: 0.8rem 0 0.5rem;
  }
`;

export const AccordionDate = styled.p`
  padding-bottom: 0.5rem;
`;

export const AccordionInfo = styled.p`
  padding-bottom: 1.5rem;
`;

export const Button = styled.button`
  display: flex;          
  flex-direction: column;  
  justify-content: center; 
  align-items: center;   
  a {
    background-color: white;
    text-decoration: none;
    color: black;
    padding: 10px 20px; 
    @media not all and (pointer: coarse) {
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
`;