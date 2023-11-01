import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from './Img';

const Icon = ({variant='tweet-icon',iconPath, iconName, iconCount=0, style='', link=''}) => {
  const [toggleCount, setToggleCount] = useState([iconCount,false]);
  const navigate = useNavigate();
  const currentIcon = (toggleCount[1] ? iconPath[1] : iconPath[0]) || iconPath[0];
  
  function formatCountValue(value) {
    if (value < 10000) {
      return value.toLocaleString();
    } else if (value < 1000000) {
      return (value / 1000).toFixed(1) + "k";
    } else {
      return "1M+";
    }
  }

  function parseCountValue(formattedValue) {
    if (formattedValue.includes("k")) {
      const numericValue = parseFloat(formattedValue) * 1000;
      return Math.round(numericValue);
    } else {
      const numericValue = parseFloat(formattedValue.replace(/,/g, ""));
      return Math.round(numericValue);
    }
  }

  const handleTweetIconClick =() => {
    if(iconName === "share") {
      setToggleCount([toggleCount[0], !toggleCount[1]]);
      return;
    } 
    let count = parseCountValue(toggleCount[0]);
    const newCount = toggleCount[1] ? count - 1 : count + 1;
    const newToggleCount = [formatCountValue(newCount), !toggleCount[1]];
    setToggleCount(newToggleCount);
  }

  const handleNavIconClick = () => navigate(link);

  return (
    <button className={style}
      onClick={variant === "tweet-icon" ? handleTweetIconClick : handleNavIconClick} >
      <Img imgPath={currentIcon} imgAlt={iconName} />
      {toggleCount[0] ? <p>{toggleCount[0]}</p> : <></>}
    </button>
  );
}

export default Icon