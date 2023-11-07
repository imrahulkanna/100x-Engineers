import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tweet from '../../components/Tweet';
import Img from '../../components/Img';
import ProfileHeader from '../../components/ProfileHeader';
import { useTweetData } from '../../context/TweetContext';
import backArrow from '../../assets/back.svg';
import composeIcon from '../../assets/createTweet.svg'

function Profile() {
  const navigate = useNavigate();
  const {tweetDataset} = useTweetData();
  
  return (
    <div className="min-h-screen bg-black font-inter text-twitter-neutral-50 flex flex-col relative">
      {/* Back arrow */}
      <div
        onClick={() => navigate(-1)}
        className="p-1 bg-black rounded-full absolute top-4 left-4 cursor-pointer"
      >
        <Img imgPath={backArrow} imgAlt="back-arrow" />
      </div>

      <ProfileHeader />

      {/* Tweets Area */}
      <main className="self-stretch flex flex-col">
        {tweetDataset
          .filter((tweetData) => tweetData.handleName === "imrahulkanna")
          .map((tweetData) => {
            return (
              <Tweet
                key={tweetData.id}
                id={tweetData.id}
                userName={tweetData.userName}
                handleName={tweetData.handleName}
                tweetPostedTime={tweetData.tweetPostedTime}
                content={tweetData.content}
                avatar={tweetData.avatar}
                tweetIconDetails={tweetData.tweetIconDetails}
              />
            );
          })}
      </main>

      <button
        onClick={() => navigate("/compose-tweet")}
        className="p-4 bg-twitter-blue rounded-full fixed bottom-[2.5rem] right-[1rem]"
      >
        <Img imgPath={composeIcon} imgAlt="create-tweet" />
      </button>
    </div>
  );
}

export default Profile