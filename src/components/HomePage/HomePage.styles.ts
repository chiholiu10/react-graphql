import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: green;
`;

export const AccordionButton = styled.div<{ open: boolean; }>`
  background-color: ${props => (props.open ? "grey" : "black")};
  padding: 1rem;

`;

export const CharacterImage = styled.img`
  width: 100%;
  max-width: default;
  height: 250px;
  object-fit: cover; 
`;
export const CharacterHeading = styled.h2`
  font-size: 20px;
  padding: 1rem;
`;

export const EpisodeListSection = styled.div<{ open: boolean; }>`
  background-color: ${({ theme }) => theme.colors.grey};
  display: ${props => (props.open ? "none" : "flex")};
  flex-direction: column;
  padding: 1rem;
`;

export const EpisodeInfo = styled.div`
`;

export const EpisodeName = styled.p`
  height: 30px;
  font-size: 12px;
`;

export const EpisodeInfoBlock = styled.div`
`;

export const EpisodeImage = styled.img`
  width: 100%;
  max-width: default;
  height: 100px;
  object-fit: cover; 
  object-position: 100% 0;
`;

export const EpisodeContainer = styled.div`
  padding-top: 6rem;
`;

