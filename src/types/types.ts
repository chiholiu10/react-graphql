export interface Episodes {
  name: string;
  status: string;
  Species: string;
  type: string;
}

export interface IProps {
  characterData: Episodes[];
  value: string,
  onChange: any;
  loaded: boolean;
  triggerPosY: boolean;
  characterId: number;
  selectedId: number;
  setSelectedId: number;
  characterName: string;
  characterCreated: string;
}


