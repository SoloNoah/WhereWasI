import React, { useState, useEffect } from "react";

import SubNav from "../components/Navbar/SubNav";
import FullPage from "../components/FullPage/FullPage";
import { Link, Outlet } from "react-router-dom";

const Explore = () => {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <FullPage>
      <SubNav />
      <Outlet context={[items, setItems]} />
    </FullPage>
  );
};

export default Explore;
