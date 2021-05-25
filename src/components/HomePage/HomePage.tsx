import { FC, useEffect, useState, Suspense, useCallback, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SearchInput } from '../SearchInput/SearchInput';
import { NoResult } from '../NoResult/NoResult';
import { Loading } from '../Loading/Loading';
import { useDispatch } from "react-redux";
import { getScrollYTrigger } from '../../actions';
import { AccordionButton } from '../AccordionButton/AccordionButton';
import { AccordionBlock } from '../AccordionBlock/AccordionBlock';
import { StateProps } from '../../types/types';
import {
  CharacterImage,
  CharacterHeading,
  EpisodeContainer,
  EpisodeBlock
} from "./HomePage.styles";
import LazyLoad from 'react-lazyload';

export const HomePage: FC<HomePageProps & StateProps> = ({ characterData, loaded }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useDispatch();

  const onSelectItem = (selectedItemId: number) => {
    if (selectedId !== selectedItemId) {
      setSelectedId(selectedItemId);
    } else {
      setSelectedId(-1);
    }
  };

  const handleScollTab = useCallback(
    () => {
      dispatch(getScrollYTrigger(true));
      setSelectedId(-1);

      let timer = setTimeout(() => {
        dispatch(getScrollYTrigger(false));
      }, 1000);

      return () => clearTimeout(timer);
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScollTab);
    return () => {
      window.removeEventListener("scroll", handleScollTab);
    };
  }, [handleScollTab]);

  let filterResult = characterData.filter((character: { name: string; }) => {
    return character.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <Suspense fallback={<Loading />}>
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
          <EpisodeBlock key={character.id}>
            <CharacterHeading>{character.name}</CharacterHeading>
            <LazyLoad>
              <CharacterImage src={character.image} alt={character.name} />
            </LazyLoad>
            <AccordionButton
              characterId={character.id}
              selectedId={selectedId}
              onClick={() => onSelectItem(character.id)}
            />
            <AccordionBlock
              selectedId={selectedId}
              characterId={character.id}
              characterName={character.origin.name}
              characterCreated={character.created}
            />
          </EpisodeBlock>
        )
        )) : (<NoResult loaded={loaded} />)}
      </EpisodeContainer>
    </Suspense>
  );
};

const mapStateToProps = (state: { episodes: StateProps; }) => ({
  characterData: state.episodes.episodeList || [],
  loaded: state.episodes.episodeLoaded,
  checkScrollY: state.episodes.checkScollYTrigger
});

const connector = connect(mapStateToProps);
type HomePageProps = ConnectedProps<typeof connector>;
export default connector((memo(HomePage)));