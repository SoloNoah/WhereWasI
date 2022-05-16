import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ImageContainer from './ImageContainer';
import GeneralContainer from './GeneralContainer';

import { arrayToString } from '../../services/generalFunctions';
import { getAllEpisodesDetails } from '../../services/pagination';

const ShowInformationWrapper = styled.div`
  width: 70%;
  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 15px;
  }
`;

const InformationHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ShowTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0;
`;

const ShowPElement = styled.p`
  font-size: 15px;
  margin: 5px;
`;

const AdditionalData = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DataColumn = styled.div`
  width: 100%;
`;

const ShowMainDescriptionCont = ({ show }) => {
  const [navigatedShow, setNavigatedShow] = useState(undefined);
  const [showData, setShowData] = useState();
  const [episodeData, setEpisodeData] = useState();

  const fetchData = async (mal_id, episodes) => {
    const data = await getAllEpisodesDetails(mal_id, episodes);
    setEpisodeData(data);
  };
  useEffect(() => {
    if (Object.keys(show).length !== 0) {
      setNavigatedShow(show);
      const { studios, genres, mal_id, episodes } = show;
      const studiosString = arrayToString(studios, 'name');
      const genresString = arrayToString(genres, 'name');

      const showData = {
        studiosString,
        genresString,
      };
      fetchData(mal_id, episodes);
      setShowData(showData);
    }
  }, [show]);

  return (
    <>
      {navigatedShow && (
        <GeneralContainer>
          {navigatedShow.images && <ImageContainer src={navigatedShow.images?.jpg?.image_url} desc />}

          <ShowInformationWrapper>
            <InformationHeader>
              <ShowTitle>{navigatedShow.title}</ShowTitle>
              <ShowPElement>{navigatedShow.synopsis}</ShowPElement>
            </InformationHeader>
            <AdditionalData>
              <DataColumn>
                <ShowPElement>Type: {navigatedShow.type}</ShowPElement>
                <ShowPElement>Studios: {showData.studiosString}</ShowPElement>
                <ShowPElement>Date aired: {navigatedShow.aired.string}</ShowPElement>
                <ShowPElement>Genres: {showData.genresString}</ShowPElement>
              </DataColumn>

              <DataColumn>
                <ShowPElement>Score: {navigatedShow.score}</ShowPElement>
                <ShowPElement>Episodes: {navigatedShow.episodes}</ShowPElement>
                <ShowPElement>Status: {navigatedShow.status}</ShowPElement>
              </DataColumn>
            </AdditionalData>
          </ShowInformationWrapper>
        </GeneralContainer>
      )}

      <GeneralContainer col>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </GeneralContainer>
    </>
  );
};

export default ShowMainDescriptionCont;
