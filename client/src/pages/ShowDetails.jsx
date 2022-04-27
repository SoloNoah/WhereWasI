import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FullPage from '../components/FullPage/FullPage';

const ShowDetails = () => {
  const location = useLocation();
  const [show, setShow] = useState({});
  useEffect(() => {
    console.log(location.state);
    setShow(location.state);
  }, []);

  /**
   * For now. will make it prettier later.
   */
  return (
    <FullPage>
      {show && (
        <>
          <h1>{show.title}</h1>

          <p>{show.synopsis}</p>
        </>
      )}
    </FullPage>
  );
};

export default ShowDetails;
