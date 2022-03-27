import React, { useEffect } from "react";

import SubNav from "../components/Navbar/SubNav";
import FullPage from "../components/FullPage/FullPage";
const Explore = () => {
  useEffect(() => {
    console.log("explore rendered");
  }, []);

  return (
    <FullPage>
      <SubNav />
    </FullPage>
  );
};

export default Explore;
