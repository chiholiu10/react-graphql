import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";

export const CharacterImage = styled.img`
  width: 100%;
  max-width: default;
  height: 250px;
  object-fit: cover; 
`;

export const CharacterHeading = styled.h2`
  font-size: 20px;
  padding: 1.2rem 1rem 0.7rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

export const EpisodeInfoBlock = styled.div<{ open: boolean; }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  flex-direction: column;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transition: bottom .800s ease;
  bottom: ${props => (props.open ? "-180px" : "0")};
  color: ${({ theme }) => theme.colors.white};
  p {
    padding: 1rem 0 1.5rem;
  }
  a {
    margin-top: 1.5rem;
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

export const EpisodeInfo = styled.p`
  padding-bottom: 1.5rem;
`;

export const EpisodeName = styled.p`
  height: 30px;
  font-size: 12px;
  padding-bottom: 1rem;
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

