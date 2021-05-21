export interface Episodes {
  name: string;
  status: string;
  Species: string;
  type: string;
}

export interface IProps {
  characterData?: Episodes[];
}

export interface InputProps {
  value: any,
  onChange: any;
}
