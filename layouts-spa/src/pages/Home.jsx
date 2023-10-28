import React from 'react';
import Tweet from '../components/Tweet';
import logo_100x from "../assets/100x.svg";
import userDP from '../assets/rahul.jpg'
import composeIcon from "../assets/createTweet.svg";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import profile from "../assets/profile.svg";
import homeSelected from "../assets/home-selected.svg"
import Img from '../components/Img';

function Home() {
  const tweetDataset = [
    {
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "32m",
      content: `Don't wish for it, work for it.`,
      avatar: avatar1,
    },
    {
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
    },
    {
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "12h",
      content: `Writing gets easier after the first sentence.
              
              Lifting gets easier after the first set.
              
              People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.`,
      avatar: avatar3,
    },
    {
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "32m",
      content: `Don't wish for it, work for it.`,
      avatar: avatar1,
    },
    {
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
    },
    {
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "12h",
      content: `Writing gets easier after the first sentence.
              
              Lifting gets easier after the first set.
              
              People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.`,
      avatar: avatar3,
    },
  ];

  return (
    <div className="min-h-screen text-twitter-neutral-50 font-inter bg-black flex flex-col items-start relative">
      {/* Header - 100xlogo and user dp */}
      <header className="py-3 px-4 self-stretch relative border-b border-twitter-neutral-700">
        <a href="../user-profile/index.html">
          <img
            src={userDP}
            alt="user-dp"
            className="w-9 h-9 rounded-full object-cover"
          />
        </a>
        <img
          src={logo_100x}
          alt="100x"
          className="peer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
        <div className="hidden py-3 px-8 bg-searchbar-fill rounded-[100px] text-base-1 leading-normal fixed bottom-[4.5rem] left-1/2 -translate-x-1/2 peer-active:block">
          Copied to Clipboard
        </div>
      </header>

      {/* Navbar */}
      <nav className="self-stretch flex border-b border-twitter-neutral-700 cursor-pointer">
        <div className="w-1/2 flex justify-center hover:bg-twitter-neutral-900">
          <div className="pt-5 flex flex-col gap-3">
            <p className="text-twitter-neutral-400">For you</p>
            <div className="w-full h-[3px] rounded-twitter bg-twitter-blue" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center hover:bg-twitter-neutral-900">
          <div className="pt-5 flex flex-col gap-3">
            <p className>Following</p>
            <div className="hidden w-full h-[3px] rounded-twitter bg-twitter-blue" />
          </div>
        </div>
      </nav>

      {/* Tweets */}
      <main className="self-stretch flex flex-col flex-1">
        {tweetDataset.map((tweetData, key) => {
          return (
            <Tweet
              key={key}
              userName={tweetData.userName}
              handleName={tweetData.handleName}
              tweetPostedTime={tweetData.tweetPostedTime}
              content={tweetData.content}
              avatar={tweetData.avatar}
            />
          );
        })}
      </main>

      <a href="../compose-tweet/index.html">
        <button className="p-4 bg-twitter-blue rounded-full fixed bottom-[5rem] right-[1rem]">
          <Img imgPath={composeIcon} imgAlt="create-tweet" />
        </button>
      </a>

      {/* Footer nav */}
      <footer className="py-[18px] px-6 bg-black border-t border-twitter-neutral-700 sticky bottom-0 self-stretch flex justify-center items-center gap-10">
        <a href>
          <Img imgPath={homeSelected} imgAlt="home-selected-icon" />
        </a>
        <a href="../user-profile/index.html">
          <Img imgPath={profile} imgAlt="profile-icon" />
        </a>

      </footer>
    </div>
  );
}

export default Home