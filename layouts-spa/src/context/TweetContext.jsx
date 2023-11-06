import React, {createContext, useState, useContext} from 'react';
import commentIcon from '../assets/comment.svg';
import retweetIcon from "../assets/retweet.svg";
import retweetIconActive from '../assets/retweet-active.svg'
import heartIcon from "../assets/heart.svg";
import heartIconActive from "../assets/heart-active.svg";
import reachIcon from "../assets/reach.svg";
import reachIconActive from "../assets/reach-active.svg";
import shareIcon from "../assets/share.svg";
import shareIconActive from "../assets/share-active.svg";
import userDP from '../assets/rahul.jpg';
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";

const TweetContext = createContext();

export const useTweetData = () => {
  return useContext(TweetContext)
}

const TweetProvider = ({ children }) => {
  const tweetData = [
    {
      id: 6,
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "32m",
      content: `Don't wish for it, work for it.`,
      avatar: avatar1,
      tweetIconDetails: [
        {
          name: "comment",
          svg: [commentIcon],
          count: "11",
        },
        {
          name: "retweet",
          svg: [retweetIcon, retweetIconActive],
          count: "270",
        },
        {
          name: "heart",
          svg: [heartIcon, heartIconActive],
          count: "1,869",
        },
        {
          name: "reach",
          svg: [reachIcon, reachIconActive],
          count: "99.6k",
        },
        {
          name: "share",
          svg: [shareIcon, shareIconActive],
        },
      ],
    },
    {
      id: 5,
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "10h",
      content: `i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-
              1. tidies everything nice and compact
              2. makes responsive design effortless
              3. no manual adjustments post any tweaks
              4. saves a tonnn of time

              sorry, but will stay an auto layout maxi all life.`,
      avatar: avatar2,
      tweetIconDetails: [
        {
          name: "comment",
          svg: [commentIcon],
          count: "11",
        },
        {
          name: "retweet",
          svg: [retweetIcon, retweetIconActive],
          count: "270",
        },
        {
          name: "heart",
          svg: [heartIcon, heartIconActive],
          count: "1,869",
        },
        {
          name: "reach",
          svg: [reachIcon, reachIconActive],
          count: "99.6k",
        },
        {
          name: "share",
          svg: [shareIcon, shareIconActive],
        },
      ],
    },
    {
      id: 4,
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "12h",
      content: `Writing gets easier after the first sentence.
              
              Lifting gets easier after the first set.
              
              People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.`,
      avatar: avatar3,
      tweetIconDetails: [
        {
          name: "comment",
          svg: [commentIcon],
          count: "11",
        },
        {
          name: "retweet",
          svg: [retweetIcon, retweetIconActive],
          count: "270",
        },
        {
          name: "heart",
          svg: [heartIcon, heartIconActive],
          count: "1,869",
        },
        {
          name: "reach",
          svg: [reachIcon, reachIconActive],
          count: "99.6k",
        },
        {
          name: "share",
          svg: [shareIcon, shareIconActive],
        },
      ],
    },
    {
      id: 3,
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "23h",
      content: `Don't wish for it, work for it.`,
      avatar: avatar1,
      tweetIconDetails: [
        {
          name: "comment",
          svg: [commentIcon],
          count: "11",
        },
        {
          name: "retweet",
          svg: [retweetIcon, retweetIconActive],
          count: "270",
        },
        {
          name: "heart",
          svg: [heartIcon, heartIconActive],
          count: "1,869",
        },
        {
          name: "reach",
          svg: [reachIcon, reachIconActive],
          count: "99.6k",
        },
        {
          name: "share",
          svg: [shareIcon, shareIconActive],
        },
      ],
    },
    {
      id: 2,
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "Oct 31",
      content: `i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-
              1. tidies everything nice and compact
              2. makes responsive design effortless
              3. no manual adjustments post any tweaks
              4. saves a tonnn of time

              sorry, but will stay an auto layout maxi all life.`,
      avatar: avatar2,
      tweetIconDetails: [
        {
          name: "comment",
          svg: [commentIcon],
          count: "11",
        },
        {
          name: "retweet",
          svg: [retweetIcon, retweetIconActive],
          count: "270",
        },
        {
          name: "heart",
          svg: [heartIcon, heartIconActive],
          count: "1,869",
        },
        {
          name: "reach",
          svg: [reachIcon, reachIconActive],
          count: "99.6k",
        },
        {
          name: "share",
          svg: [shareIcon, shareIconActive],
        },
      ],
    },
    {
      id: 1,
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "Oct 5",
      content: `Writing gets easier after the first sentence.
              
              Lifting gets easier after the first set.
              
              People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.`,
      avatar: avatar3,
      tweetIconDetails: [
        {
          name: "comment",
          svg: [commentIcon],
          count: "11",
        },
        {
          name: "retweet",
          svg: [retweetIcon, retweetIconActive],
          count: "270",
        },
        {
          name: "heart",
          svg: [heartIcon, heartIconActive],
          count: "1,869",
        },
        {
          name: "reach",
          svg: [reachIcon, reachIconActive],
          count: "99.6k",
        },
        {
          name: "share",
          svg: [shareIcon, shareIconActive],
        },
      ],
    },
  ];

  const [tweetDataset, setTweetDataset] = useState(tweetData);

  function setIconCount(id, iconName, count) {
    const updatedTweetData = tweetDataset.map(tweet => {
      if(tweet.id === id) {
        tweet.tweetIconDetails.map(icon=>{
          if(icon.name === iconName) icon.count=count;
        })
      } 
      return tweet;
    })
    setTweetDataset(updatedTweetData);
  }

  return (
    <TweetContext.Provider value={{ tweetDataset, setIconCount }}>
      {children}
    </TweetContext.Provider>
  );  
}

export default TweetProvider;