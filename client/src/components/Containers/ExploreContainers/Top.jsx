import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import CardsContainer from "../CardsContainer";
import { getTop } from "../../../services/jikanAPI";

const Top = () => {
  const [items, setItems] = useOutletContext();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const shows = getTop();
    setShows(shows);
  }, []);
  return (
    <>
      <div>Top</div>
      <CardsContainer />
    </>
  );
};

export default Top;
