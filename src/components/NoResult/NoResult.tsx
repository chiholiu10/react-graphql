import { FC } from "react";
import { NoSearch } from "./NoResult.styles";
import { Loading } from '../Loading/Loading';
import { NoResultProps } from '../../types/types';

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
