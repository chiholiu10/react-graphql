import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  AccordionButton,
  CharacterImage,
  CharacterHeading,
  EpisodeInfo,
  EpisodeImage,
  EpisodeInfoBlock,
  EpisodeListSection,
  EpisodeName
} from "./HomePage.styles";

export const GET_CHARACTER = gql`
    query {
        characters(page: 2, filter: { name: "rick" }) {
            results {
                name,
                image,
                gender,
                episode {
                  id,
                  name,
                  air_date,
                  episode,
                  characters {
                    id,
                    name,
                    image
                  }
                }
              }
        }
        location(id: 1) {
            id
        }
        episodesByIds(ids: [1, 2]) {
            id
        }
    }
`;

export interface Episodes {
  name: string;
  air_data: string;
  episode: string;
  characters: Array<any>;
}

export interface IProps {
  episodeList?: Episodes[];
}

export const HomePage: React.FC<IProps> = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(GET_CHARACTER);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeHandler = (text: string) => {
    setInputValue(text);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(event) => onChangeHandler(event.target.value)}
        value={inputValue}
      />
      <div>{data.characters.results.map((character: { id: number, name: string, image: string; episode: any; }, index: number) => (
        <div key={character.id}>
          <CharacterHeading>{character.name}</CharacterHeading>
          <CharacterImage src={character.image} alt={character.name} />
          {character.episode.map((char: { name: string; air_date: string; episode: string; characters: any, id: number; }) => (
            <div key={char.id}>
              {char.name}
              {char.air_date}
              {char.episode}
              <AccordionButton onClick={() => setOpen(!open)}
                open={open}>
                Check all characters
              </AccordionButton>
              <EpisodeListSection open={open}>
                {char.characters.map((ep: { id: number, name: string; image: string; }, index: number) => (
                  <EpisodeInfo key={ep.id}>
                    <EpisodeInfoBlock>
                      <EpisodeName>{ep.name}</EpisodeName>
                      <EpisodeImage src={ep.image} alt={ep.name} />
                    </EpisodeInfoBlock>
                  </EpisodeInfo>
                ))}
              </EpisodeListSection>
            </div>
          ))
          }
        </div >
      ))
      }</div >
    </div >
  );
};