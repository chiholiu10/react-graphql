import React, { useState } from "react";
import LazyLoad from 'react-lazyload';
import { connect, ConnectedProps } from "react-redux";
import { SearchInput } from '../SearchInput/SearchInput';
import { NoResult } from '../NoResult/NoResult';
import { Link } from "react-router-dom";

import {
  AccordionButton,
  CharacterImage,
  CharacterHeading,
  EpisodeInfo,
  EpisodeContainer,
  EpisodeListSection,
} from "./HomePage.styles";

export const HomePage: React.FC<HomePageProps> = ({ characterData }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedId, setSelectedId] = useState(0);
  const onSelectItem = (selectedItemId: number) => {
    if (selectedId !== selectedItemId) {
      setSelectedId(selectedItemId);
    } else {
      setSelectedId(-1);
    }
  };

  let filterResult = characterData.filter((character: { name: string; }) => {
    return character.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <React.Fragment>
      <SearchInput value={inputValue} onChange={setInputValue} />
      <EpisodeContainer>
        {filterResult.length > 0 ? (filterResult.map((character: {
          id: number;
          name: string;
          image: string;
          created: string;
          origin: {
            name: string;
          };
        }) => (
          <div key={character.id}>
            <CharacterHeading>{character.name}</CharacterHeading>
            <LazyLoad>
              <CharacterImage src={character.image} alt={character.name} />
            </LazyLoad>
            <AccordionButton
              onClick={() => onSelectItem(character.id)}
              open={character.id === selectedId ? true : false}
            >
              More info
          </AccordionButton>
            <EpisodeListSection
              open={character.id === selectedId ? false : true}
            >
              <p>{character.created}</p>
              <EpisodeInfo>{character.origin.name}</EpisodeInfo>
              <Link
                to={`/characters/${character.id}`}
              >
                Character Info
            </Link>
            </EpisodeListSection>
          </div>
        )
        )) : (<NoResult />)}
      </EpisodeContainer>
    </React.Fragment >
  );
};

const mapStateToProps = (state: any) => {
  return {
    characterData: state.episodes.episodeList || []
  };
};

const connector = connect(mapStateToProps);
type HomePageProps = ConnectedProps<typeof connector>;
export default connector(HomePage);