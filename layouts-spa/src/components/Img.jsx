import React from 'react';

function Img({imgPath, imgAlt, onClick}) {
  return (
    <img
      src={imgPath}
      alt={imgAlt}
    />
  );
}  

export default Img;