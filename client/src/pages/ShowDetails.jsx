import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FullPage from "../components/FullPage/FullPage";

import ShowMainDescriptionCont from "../components/Containers/ShowMainDescriptionCont";

const ShowDetails = () => {
  const location = useLocation();
  const [show, setShow] = useState({});
  useEffect(() => {
    setShow(location.state);
  }, []);

  return (
    <FullPage>
      {show && (
        <>
          <ShowMainDescriptionCont show={show} />
        </>
      )}
    </FullPage>
  );
};

export default ShowDetails;
