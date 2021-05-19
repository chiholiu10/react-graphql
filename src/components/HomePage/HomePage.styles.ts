import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";

export const AccordionButton = styled.div<{ open: boolean; }>`
  border: ${props => (props.open ? "1px solid red" : "1px solid green")};
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
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  display: ${props => (props.open ? "none" : "block")};
`;

export const EpisodeInfo = styled.div`
  flex: 0 0 33.333%;
  padding: 10px 10px 25px; 
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

export const AccordionItemPanel = styled.div`
`;

