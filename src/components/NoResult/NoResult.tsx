import { FC, memo } from "react";
import { NoSearch } from "./NoResult.styles";
import { connect, ConnectedProps } from "react-redux";
import { Loading } from '../Loading/Loading';

export const NoResult: FC<NoResultProps> = ({ loaded }) => {
  if (!loaded) {
    return (
      <Loading />
    );
  } else {
    return (
      <NoSearch>No Search Result....</NoSearch>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
    loaded: state.episodes.episodeLoaded
  };
};

const connector = connect(mapStateToProps);
type NoResultProps = ConnectedProps<typeof connector>;
export default connector(memo(NoResult));
