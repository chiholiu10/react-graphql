export interface Episodes {
  name: string;
  status: string;
  Species: string;
  type: string;
}

export interface HomeProps {
  characterData: Episodes[];
  loaded: boolean;
}

export interface SearchInputProps {
  value: string;
  onChange: any;
}

export interface AccordionButtonProps {
  characterId: number;
  selectedId: number;
  onClick: any;
}

export interface AccordionBlockProps {
  selectedId: number;
  characterId: number;
  characterName: string;
  characterCreated: string;
}

export interface NoResultProps {
  loaded: boolean;
}

export interface CharacterData {
  created: string;
  episodes: Episodes;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string, url: string;
  };
  name: string;
  origin: {
    name: string,
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface StateProps {
  episodeList: CharacterData[];
  episodeLoaded: boolean,
  checkScollYTrigger: boolean;
  episodeData: CharacterDetail;
}

export interface CharacterDetail {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}