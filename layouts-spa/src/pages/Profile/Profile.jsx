import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tweet from '../../components/Tweet';
import Img from '../../components/Img';
import backArrow from '../../assets/back.svg';
import banner from '../../assets/banner.jpg';
import userDP from '../../assets/rahul.jpg';
import linkIcon from '../../assets/link.svg'
import calendar from "../../assets/calendar.svg";
import composeIcon from '../../assets/createTweet.svg'

function Profile() {
  const navigate = useNavigate();
  const tweetDataset = [
    {
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "32m",
      content: `Don't wish for it, work for it.`,
      avatar: userDP,
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
      avatar: userDP,
    },
    {
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "21h",
      content: `Writing gets easier after the first sentence.
              
              Lifting gets easier after the first set.
              
              People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.`,
      avatar: userDP,
    },
    {
      userName: "Name",
      handleName: "handle",
      tweetPostedTime: "Sep 19",
      content: `Don't wish for it, work for it.`,
      avatar: userDP,
    },
  ];
  return (
    <div className="min-h-screen bg-black font-inter text-twitter-neutral-50 flex flex-col relative">
      {/* Back arrow */}
      <div
        onClick={() => navigate(-1)}
        className="p-1 bg-black rounded-full absolute top-4 left-4 cursor-pointer"
      >
        <Img imgPath={backArrow} imgAlt="back-arrow" />
      </div>

      {/* Banner */}
      <section className="self-stretch">
        <Img imgPath={banner} imgAlt="banner" style="w-full" />
      </section>

      {/* Profile Details */}
      <section className="relative py-3 px-4 flex flex-col border-b border-twitter-neutral-500">
        <Img
          imgPath={userDP}
          imgAlt="user-dp"
          style="w-20 h-20 rounded-full border-4 border-black absolute left-4 top-0 -translate-y-1/2"
        />
        <div className="w-full flex justify-end">
          <a href="./edit-profile.html">
            <button className="py-2 px-5 justify-center items-center rounded-twitter border border-button-stroke">
              Edit profile
            </button>
          </a>
        </div>
        <div className="self-stretch flex flex-col gap-4">
          <div className="self-stretch flex flex-col gap-1 leading-normal">
            <h1 className="text-xl font-bold leading-normal">Rahul Kanna</h1>
            <p className="text-twitter-neutral-500 text-base-1 leading-normal">
              @imrahulkanna
            </p>
          </div>
          <div className="leading-normal">
            Techie | Otaku | Learner, Dreamer, Doer.
            I tweet about web dev and anime.
            <span className="text-twitter-blue"> #codelove</span> dattebayo 🎶
          </div>
          <div className="self-stretch flex flex-wrap gap-x-5 text-twitter-neutral-500">
            <div className="flex items-center gap-1">
              <svg
                width={15}
                height={15}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              >
                <g>
                  <path
                    d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
                    fill="#737373"
                  />
                </g>
              </svg>
              <p>Hyderabad, Telangana</p>
            </div>
            <div className="flex items-center gap-1">
              <Img imgPath={linkIcon} imgAlt="link-icon" />
              <a
                href="https://www.github.com/imrahulkanna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-twitter-blue"
              >
                github.com/imrahulkanna
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Img imgPath={calendar} imgAlt="calendar-icon" />
              <p>Joined June 2020</p>
            </div>
          </div>
          <div className="self-stretch flex items-center gap-5 font-medium leading-normal">
            <p>
              196{" "}
              <span className="text-twitter-neutral-500 font-normal">
                Following
              </span>
            </p>
            <p>
              57{" "}
              <span className="text-twitter-neutral-500 font-normal">
                Followers
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Tweets Area */}
      <main className="self-stretch flex flex-col">
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
        <button className="p-4 bg-twitter-blue rounded-full fixed bottom-[2.5rem] right-[1rem]">
          <Img imgPath={composeIcon} imgAlt="create-tweet" />
        </button>
      </a>
    </div>
  );
}

export default Profile