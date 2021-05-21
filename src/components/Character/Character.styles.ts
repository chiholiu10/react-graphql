import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";

export const CharacterContainer = styled.div`
  padding: 1rem;
  display: flex;  
  padding-top: 50px;
  flex-direction: column;
  ${breakpoint.sm`
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const CharacterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.sm`
    flex-direction: row;
  `}
`;

export const CharacterColumn = styled.div`
  font-size: 1.1rem;
  padding: 2rem 0;
  ${breakpoint.sm`
    width: 50%;
  `}
`;

export const CharacterName = styled.p`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  ${breakpoint.sm`
    font-size: 2.2rem;
    padding-bottom: 2rem;
  `}
`;

export const CharacterStatus = styled.p`
  padding-bottom: 0.4rem;
  ${breakpoint.sm`
    font-size: 1.2rem;
    padding-bottom: 0.6rem;
  `}
`;

export const CharacterSpecies = styled.p`   
  padding-bottom: 0.4rem;
  ${breakpoint.sm`
    padding-bottom: 0.6rem;
    font-size: 1.2rem;
  `}
`;
export const CharacterGender = styled.p`
  padding-bottom: 0.4rem;
  ${breakpoint.sm`
    padding-bottom: 0.6rem;
  `}
`;

export const CharacterImage = styled.img`
  padding-bottom: 0.3rem;
  ${breakpoint.sm`
    padding-bottom: 0.6rem;
  `}
`;

export const Button = styled.button`
  padding: 0.5rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

export const CharacterTopColumn = styled.div`
  width: 100%;
`;