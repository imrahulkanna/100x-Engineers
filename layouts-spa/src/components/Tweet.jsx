import React from 'react';
import Img from './Img';
import commentIcon from '../assets/comment.svg';
import retweetIcon from "../assets/retweet.svg";
import heartIcon from "../assets/heart.svg";
import reachIcon from "../assets/reach.svg";
import shareIcon from "../assets/share.svg";

function Tweet({userName, handleName, tweetPostedTime, content, avatar}) {
  const tweetIconDetails = [
    {
      name: "comment",
      svg: commentIcon,
      count: '11',
    },
    {
      name: "retweet",
      svg: retweetIcon,
      count: '270',
    },
    {
      name: "heart",
      svg: heartIcon,
      count: '1,869',
    },
    {
      name: "reach",
      svg: reachIcon,
      count: "99.6k",
    },
    {
      name: "share",
      svg: shareIcon,
    }
  ];
  return (
    <article className="py-2 px-4 border-b border-twitter-neutral-700 self-stretch flex items-start gap-4">
      {/* user avatar */}
      <img
        src={avatar}
        alt="avatar-1"
        className="w-12 h-12 rounded-full"
      />

      {/* tweet body */}
      <div className="w-full flex flex-col gap-1 self-stretch">
        <header className="flex items-center gap-2 self-stretch">
          <p className="text-twitter-neutral-50 text-base font-medium leading-normal">
            {userName}
          </p>
          <p className="text-twitter-neutral-500 text-base font-normal leading-normal">
            @{handleName} • {tweetPostedTime}
          </p>
        </header>
        <p className="self-stretch text-base-1 leading-normal whitespace-pre-line">
          {content}
        </p>

        {/* icons */}
        <div className="py-3 flex justify-between items-center self-stretch text-twitter-neutral-500 text-sm leading-normal">
          {
            tweetIconDetails.map((icon, key) => {
              return (
                <button key={key} className="flex items-center gap-[5px]">
                  <Img imgPath={icon.svg} imgAlt={icon.name}/>
                  {icon.count ? <p>{icon.count}</p> : <></>}
                </button>
              );
          })
          }
        </div>
      </div>
    </article>
  );
}

export default Tweet