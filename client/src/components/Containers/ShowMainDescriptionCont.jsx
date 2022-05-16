import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getEpisodesForPage } from '../../store/actions/selectedShowAction';

import ImageContainer from './ImageContainer';
import GeneralContainer from './GeneralContainer';

import { arrayToString } from '../../services/generalFunctions';

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

const ShowMainDescriptionCont = ({ show, episodesArray, getEpisodesForPage }) => {
  const [showData, setShowData] = useState();
  const [episodeRender, setEpisodeRender] = useState();

  const fetchData = async (mal_id, episodes, page = 1) => {
    const episodesResponse = await getEpisodesForPage(mal_id, episodes, page);
    const renderList = episodesResponse.map((d) => {
      let title = d.title ? d.title : 'No title';
      return <li key={d.mal_id}>{title}</li>;
    });
    setEpisodeRender(renderList);
  };

  useEffect(() => {
    if (Object.keys(show).length !== 0) {
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

  const handlePageClick = (event) => {
    fetchData(show.mal_id, show.episodes, event.selected + 1);
  };

  return (
    <>
      {show && showData && (
        <GeneralContainer>
          {show.images && <ImageContainer src={show.images?.jpg?.image_url} desc />}

          <ShowInformationWrapper>
            <InformationHeader>
              <ShowTitle>{show.title}</ShowTitle>
              <ShowPElement>{show.synopsis}</ShowPElement>
            </InformationHeader>
            <AdditionalData>
              <DataColumn>
                <ShowPElement>Type: {show.type}</ShowPElement>
                <ShowPElement>Studios: {showData.studiosString}</ShowPElement>
                <ShowPElement>Date aired: {show.aired.string}</ShowPElement>
                <ShowPElement>Genres: {showData.genresString}</ShowPElement>
              </DataColumn>

              <DataColumn>
                <ShowPElement>Score: {show.score}</ShowPElement>
                <ShowPElement>Episodes: {show.episodes}</ShowPElement>
                <ShowPElement>Status: {show.status}</ShowPElement>
              </DataColumn>
            </AdditionalData>
          </ShowInformationWrapper>
        </GeneralContainer>
      )}

      {episodeRender && (
        <GeneralContainer col>
          {episodeRender}
          <ReactPaginate pageCount={show.episodes / 4} pageRange={2} onPageChange={handlePageClick} />
        </GeneralContainer>
      )}
      {!episodeRender && <GeneralContainer col>Loading...</GeneralContainer>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    episodesArray: state.selectedShowReducer.episodesArray,
  };
};
const mapDispatchToProps = {
  getEpisodesForPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMainDescriptionCont);
