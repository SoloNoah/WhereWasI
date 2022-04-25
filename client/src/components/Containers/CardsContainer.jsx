import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import ShowCard from './ShowCard';

import { addSeries, removeSeries, resetMessage } from '../../store/actions/profileAction';

const CardsWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
 margin: 0 auto;
 @media (max-width: 1280px) {
   flex-direction: column;
   gap: 20px;
}
  }
`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const CardsContainer = ({ list, addSeries, removeSeries, resetMessage, failErrorMessage, successMessage }) => {
  const toggleCardStatus = async (id, episodesNum, synopsis, image_url, showAdded) => {
    let res;
    if (showAdded) {
      res = await addSeries(id, episodesNum, synopsis, image_url);
    } else {
      res = await removeSeries(id);
    }
    if (res === 400 || res === 500) {
      setOpen(true);
    }
  };
  const [snackbarOpen, setOpen] = useState(false);
  const [snackbarMessage, setMessage] = useState('');

  useEffect(() => {
    setMessage(failErrorMessage);
  }, [failErrorMessage]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    resetMessage();
    setOpen(false);
  };
  const listItems = list.map((d) => <ShowCard key={d.mal_id} show={d} handleClick={toggleCardStatus}></ShowCard>);

  return (
    <CardsWrapper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      {listItems}
    </CardsWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    failErrorMessage: state.profileReducer.failErrorMessage,
    successMessage: state.profileReducer.successMessage,
  };
};

const mapDispatchToProps = {
  addSeries,
  removeSeries,
  resetMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
