import React from "react";
import { useNavigate } from "react-router-dom";
import Tweet from "../components/Tweet";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { useTweetData } from "../context/TweetContext";
import Navbar from "../components/Navbar";
import logo_100x from "../assets/100x.svg";
import userDP from "../assets/rahul.jpg";
import composeIcon from "../assets/createTweet.svg";
import profile from "../assets/profile.svg";
import homeSelected from "../assets/home-selected.svg";

function Home() {
  const navigate = useNavigate();
  const { tweetDataset } = useTweetData();

  return (
    <div className="relative flex min-h-screen flex-col items-start bg-black font-inter text-twitter-neutral-50">
      {/* Header - 100xlogo and user dp */}
      <header className="relative self-stretch border-b border-twitter-neutral-700 px-4 py-3">
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
        <div className="fixed bottom-[4.5rem] left-1/2 hidden -translate-x-1/2 rounded-[100px] bg-searchbar-fill px-8 py-3 text-base-1 leading-normal peer-active:block">
          Copied to Clipboard
        </div>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Tweets */}
      <main className="flex flex-1 flex-col self-stretch">
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
        className="fixed bottom-[5rem] right-[1rem] rounded-full bg-twitter-blue p-4"
      >
        <Img imgPath={composeIcon} imgAlt="create-tweet" />
      </button>

      {/* Footer nav */}
      <footer className="sticky bottom-0 flex items-center justify-center gap-10 self-stretch border-t border-twitter-neutral-700 bg-black px-6 py-[18px]">
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

export default Home;
