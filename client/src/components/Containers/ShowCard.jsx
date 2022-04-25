import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DescriptionCont from './DescriptionCont';

const CardWrapper = styled.div`
  flex: 0 1 30%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    padding: 0 30px;
    margin: 30px 0;
 }
  }
`;
const ShowCard = ({ show, handleClick, isAuthenticated }) => {
  const { mal_id, title, synopsis, episodes, inProfile } = show;
  const [addedShowToProfile, setShowAdd] = useState(false);

  const image_url = show.images ? show.images.jpg.image_url : show.image_url;
  useEffect(() => {
    setShowAdd(inProfile);
  }, []);
  const toggleCardStatus = () => {
    setShowAdd(!addedShowToProfile);
    handleClick(mal_id, episodes, synopsis, image_url, !addedShowToProfile);
  };
  return (
    <CardWrapper>
      <DescriptionCont img={image_url} text={synopsis} title={title} />
      {isAuthenticated && <button onClick={toggleCardStatus}>{!addedShowToProfile ? 'Add' : 'Remove'}</button>}
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(ShowCard);
