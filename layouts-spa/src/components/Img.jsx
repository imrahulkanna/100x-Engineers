import React from 'react';

function Img({imgPath, imgAlt, style}) {
  return (
    <img
      src={imgPath}
      alt={imgAlt}
      className={style}
    />
  );
}  

export default Img;