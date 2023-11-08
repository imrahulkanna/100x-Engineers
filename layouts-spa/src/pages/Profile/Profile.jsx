import React from "react";
import { useNavigate } from "react-router-dom";
import Tweet from "../../components/Tweet";
import Img from "../../components/Img";
import ProfileHeader from "../../components/ProfileHeader";
import { useTweetData } from "../../context/TweetContext";
import backArrow from "../../assets/back.svg";
import composeIcon from "../../assets/createTweet.svg";

function Profile() {
  const navigate = useNavigate();
  const { tweetDataset } = useTweetData();

  return (
    <div className="relative flex min-h-screen flex-col bg-black font-inter text-twitter-neutral-50">
      {/* Back arrow */}
      <div
        onClick={() => navigate(-1)}
        className="absolute left-4 top-4 cursor-pointer rounded-full bg-black p-1"
      >
        <Img imgPath={backArrow} imgAlt="back-arrow" />
      </div>

      <ProfileHeader />

      {/* Tweets Area */}
      <main className="flex flex-col self-stretch">
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
        className="fixed bottom-[2.5rem] right-[1rem] rounded-full bg-twitter-blue p-4"
      >
        <Img imgPath={composeIcon} imgAlt="create-tweet" />
      </button>
    </div>
  );
}

export default Profile;
