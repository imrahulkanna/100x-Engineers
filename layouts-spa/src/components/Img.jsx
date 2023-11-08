import React from "react";

function Img({ imgPath, imgAlt, style = "", ...rest }) {
  return <img src={imgPath} alt={imgAlt} className={style} {...rest} />;
}

export default Img;
