import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { TextField } from '@mui/material';
import { searchAnime } from '../../store/actions/exploreAction';
import MainButton from '../Buttons/MainButton';

const style = {
  padding: '9px 18px',
  fontSize: '15px',
  color: '#093263',
  backgroundColor: 'white',
};
const SearchWrapper = ({ searchAnime }) => {
  const searchForm = useRef();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = searchForm.current;
    await searchAnime(form['searchInput'].value);
    navigate('/search/' + form['searchInput'].value);
  };
  return (
    <form ref={searchForm}>
      <TextField id={'searchInput'} className='input' variant='standard' label='Search'></TextField>
      {/* <button onClick={handleSearch}>Search</button> */}
      <MainButton func={handleSearch} classValue={'home-btn'} textValue={'Search'} style={style} />
    </form>
  );
};

const mapDispatchToProps = {
  searchAnime,
};

export default connect(null, mapDispatchToProps)(SearchWrapper);
