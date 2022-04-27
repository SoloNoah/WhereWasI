import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DescriptionCont from './DescriptionCont';
import MainButton from '../Buttons/MainButton';
const CardWrapper = styled.div`
  flex: 0 1 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  border: 2px solid #5896E1;
  border-radius: 10px;
  padding: 15px;
  
  @media (max-width: 1280px) {
    padding: 15px 30px;
    margin: 30px 0;
 }
  }
`;
const style = {
  padding: '9px 18px',
  fontSize: '15px',
  color: '#093263',
  backgroundColor: 'white',
};
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
      {/* {isAuthenticated && <button onClick={toggleCardStatus}>{!addedShowToProfile ? 'Add' : 'Remove'}</button>} */}
      <MainButton func={toggleCardStatus} classValue={'home-btn'} textValue={!addedShowToProfile ? 'Add' : 'Remove'} style={style} />
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(ShowCard);
