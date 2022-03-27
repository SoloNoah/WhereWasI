import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import CardsContainer from "../CardsContainer";
import { getToday } from "../../../services/jikanAPI";

const Today = () => {
  const [items, setItems] = useOutletContext();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const shows = getToday();
    setShows(shows);
  }, []);
  return (
    <>
      <div>Today</div>
      <CardsContainer />
    </>
  );
};

export default Today;
