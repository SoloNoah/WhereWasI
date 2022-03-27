import React from "react";

const CardsContainer = ({ list }) => {
  console.log(list);
  const listItems = list.map((d) => <li key={d.mal_id}>{d.title}</li>);

  return <div>{listItems}</div>;
};

export default CardsContainer;
