import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ImageContainer from "./ImageContainer";

import { arrayToString } from "../../services/generalFunctions";

const ShowDescpriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 70%;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 50px;
  height: auto;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
`;

const ShowInformationWrapper = styled.div`
  width: 70%;
  @media (max-width: 1280px) {
    width: 90%;
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
  const [studios, setStudiosString] = useState("");
  const [genres, setGenresString] = useState("");
  const [score, setScore] = useState("");
  const [episodes, setEpisodesNumber] = useState("");
  const [status, setStatus] = useState("");
  const [dateAired, setDateAired] = useState("");

  useEffect(() => {
    if (Object.keys(show).length !== 0) {
      console.log(show);
      setNavigatedShow(show);
      const { studios, genres } = show;

      //instead of multiple states maybe i can do a custom hook here.
      setStudiosString(arrayToString(studios, "name"));
      setGenresString(arrayToString(genres, "name"));
      setScore(show.score);
      setEpisodesNumber(show.episodes);
      setStatus(show.status);
      setDateAired(show.aired.string);
    }
  }, [show]);

  return (
    <>
      {navigatedShow && (
        <ShowDescpriptionWrapper>
          {navigatedShow.images && (
            <ImageContainer src={navigatedShow.images?.jpg?.image_url} desc />
          )}

          <ShowInformationWrapper>
            <InformationHeader>
              <ShowTitle>{navigatedShow.title}</ShowTitle>
              <ShowPElement>{navigatedShow.synopsis}</ShowPElement>
            </InformationHeader>
            <AdditionalData>
              <DataColumn>
                <ShowPElement>Type: {navigatedShow.type}</ShowPElement>
                <ShowPElement>Studios: {studios}</ShowPElement>
                <ShowPElement>Date aired: {dateAired}</ShowPElement>
                <ShowPElement>Genres: {genres}</ShowPElement>
              </DataColumn>

              <DataColumn>
                <ShowPElement>Score: {score}</ShowPElement>
                <ShowPElement>Episodes: {episodes}</ShowPElement>
                <ShowPElement>Status: {status}</ShowPElement>
              </DataColumn>
            </AdditionalData>
          </ShowInformationWrapper>
        </ShowDescpriptionWrapper>
      )}
    </>
  );
};

export default ShowMainDescriptionCont;
