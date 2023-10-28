import React from 'react';

function Img({imgPath, imgAlt}) {
  return (
    <img src={imgPath} alt={imgAlt}/>
  );
}  

export default Img;