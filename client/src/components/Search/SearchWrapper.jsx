import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { TextField, Button } from '@mui/material';
import { searchAnime } from '../../store/actions/exploreAction';

const SearchWrapper = ({ searchAnime }) => {
  const searchForm = useRef();
  const navigate = useNavigate();
  // const [submitClicked, setSubmitClicked] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = searchForm.current;
    await searchAnime(form['searchInput'].value);
    navigate('/search/' + form['searchInput'].value);
  };
  return (
    <form ref={searchForm}>
      <TextField id={'searchInput'} className='input' variant='standard' label='Search'></TextField>
      <button onClick={handleSearch}>Search</button>
    </form>
  );
};

const mapDispatchToProps = {
  searchAnime,
};

export default connect(null, mapDispatchToProps)(SearchWrapper);
