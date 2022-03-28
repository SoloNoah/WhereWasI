import React from 'react';

import DescriptionCont from './DescriptionCont';
const ShowCard = ({ show }) => {
  const { mal_id, title, images, synopsis } = show;
  const image_url = images.jpg.image_url;
  return (
    <>
      <DescriptionCont img={image_url} text={synopsis} title={title} />
    </>
  );
};

export default ShowCard;
