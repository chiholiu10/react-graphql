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