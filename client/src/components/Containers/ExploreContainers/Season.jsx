import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import CardsContainer from "../CardsContainer";
import { getSeasonAnime } from "../../../services/jikanAPI";

const Season = () => {
  const [items, setItems] = useOutletContext();
  const [shows, setShows] = useState([]);
  useEffect(() => {
    const shows = getSeasonAnime();
  }, []);
  return (
    <>
      <div>Season</div>
      <CardsContainer />
    </>
  );
};

export default Season;
