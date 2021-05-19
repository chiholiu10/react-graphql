
export interface Episodes {
  name: string;
  air_data: string;
  episode: string;
  characters: Array<any>;
}

export interface IProps {
  episodeList?: Episodes[];
}


export const EpisodeList: React.FC<IProps> = ({ episodeList }) => {
  console.log(episodeList);
  return (
    <div>EpisodeList</div>
  );
};