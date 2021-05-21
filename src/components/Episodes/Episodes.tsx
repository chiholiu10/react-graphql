import React, { useEffect, Suspense } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEpisode } from "../../actions/index";
import axios from "axios";

export const Episodes: React.FC<EpisodesPageProps> = ({ episodeDetails }) => {
  let { id } = useParams<{ id: string; }>();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        dispatch(getEpisode(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Name: {episodeDetails.name}</div>
      <div>Status: {episodeDetails.status}</div>
      <div>Species: {episodeDetails.species}</div>
      <div>Gender: {episodeDetails.gender}</div>
      <img src={episodeDetails.image} alt={episodeDetails.name} />
    </Suspense>
  );
};

const mapStateToProps = (state: any) => {
  return {
    episodeDetails: state.episodes.episodeData || []
  };
};

const connector = connect(mapStateToProps);
type EpisodesPageProps = ConnectedProps<typeof connector>;
export default connector(Episodes);