import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";
import theme from '../../styles/Themes';

export const CharacterImage = styled.img`
  width: 100%;
  max-width: default;
  height: 250px;
  object-fit: cover; 
`;

export const CharacterHeading = styled.h2`
  font-size: 20px;
  padding: 1.2rem 1rem 0.7rem 1rem;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
`;

export const EpisodeName = styled.p`
  height: 30px;
  font-size: 12px;
  padding-bottom: 1rem;
  border: 1px solid red;
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

export const EpisodeBlock = styled.div`
  margin-bottom: 3rem;
  border: 1px solid darkGrey;
  ${breakpoint.xs`
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding-bottom: 0;
    margin-bottom: 2rem;
  `}
`;

