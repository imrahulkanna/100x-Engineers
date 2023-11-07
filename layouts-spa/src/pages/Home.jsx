import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tweet from '../components/Tweet';
import Img from '../components/Img';
import Icon from '../components/Icon';
import { useTweetData } from '../context/TweetContext';
import Navbar from '../components/Navbar';
import logo_100x from "../assets/100x.svg";
import userDP from '../assets/rahul.jpg'
import composeIcon from "../assets/createTweet.svg";
import profile from "../assets/profile.svg";
import homeSelected from "../assets/home-selected.svg"

function Home() {
  const navigate = useNavigate();  
  const {tweetDataset} = useTweetData();
  
  return (
    <div className="min-h-screen text-twitter-neutral-50 font-inter bg-black flex flex-col items-start relative">
      {/* Header - 100xlogo and user dp */}
      <header className="py-3 px-4 self-stretch relative border-b border-twitter-neutral-700">
        <a onClick={() => navigate("/profile")}>
          <Img
            imgPath={userDP}
            imgAlt="user-dp"
            style="w-9 h-9 rounded-full object-cover"
          />
        </a>
        <Img
          imgPath={logo_100x}
          imgAlt="100x"
          style="peer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
        <div className="hidden py-3 px-8 bg-searchbar-fill rounded-[100px] text-base-1 leading-normal fixed bottom-[4.5rem] left-1/2 -translate-x-1/2 peer-active:block">
          Copied to Clipboard
        </div>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Tweets */}
      <main className="self-stretch flex flex-col flex-1">
        {tweetDataset.map((tweetData) => {
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
        className="p-4 bg-twitter-blue rounded-full fixed bottom-[5rem] right-[1rem]"
      >
        <Img imgPath={composeIcon} imgAlt="create-tweet" />
      </button>

      {/* Footer nav */}
      <footer className="py-[18px] px-6 bg-black border-t border-twitter-neutral-700 sticky bottom-0 self-stretch flex justify-center items-center gap-10">
        <Icon
          variant="nav-icon"
          iconPath={[homeSelected]}
          iconAlt="home-selected-icon"
          link={"/home"}
        />
        <Icon
          variant="nav-icon"
          iconPath={[profile]}
          iconAlt="profile-icon"
          link={"/profile"}
        />
      </footer>
    </div>
  );
}

export default Home