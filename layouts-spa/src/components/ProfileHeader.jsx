import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "./Img";
import Button from "./Button";
import banner from "../assets/banner.jpg";
import userDP from "../assets/rahul.jpg";
import linkIcon from "../assets/link.svg";
import calendar from "../assets/calendar.svg";

const ProfileHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Banner */}
      <section className="self-stretch">
        <Img imgPath={banner} imgAlt="banner" style="w-full" />
      </section>

      {/* Profile Details */}
      <section className="relative flex flex-col border-b border-twitter-neutral-500 px-4 py-3">
        <Img
          imgPath={userDP}
          imgAlt="user-dp"
          style="w-20 h-20 rounded-full border-4 border-black absolute left-4 top-0 -translate-y-1/2"
        />
        <div className="flex w-full justify-end">
          {/* <button
            onClick={() => navigate("/edit-profile")}
            className="flex items-center justify-center rounded-twitter border border-button-stroke px-5 py-2"
          >
            Edit profile
          </button> */}
          <Button
            variant={"outline"}
            text={"Edit profile"}
            onClick={() => navigate("/edit-profile")}
          />
        </div>
        <div className="flex flex-col gap-4 self-stretch">
          <div className="flex flex-col gap-1 self-stretch leading-normal">
            <h1 className="text-xl font-bold leading-normal">Rahul Kanna</h1>
            <p className="text-base-1 leading-normal text-twitter-neutral-500">
              @imrahulkanna
            </p>
          </div>
          <div className="leading-normal">
            Techie | Otaku | Learner, Dreamer, Doer. I tweet about web dev and
            anime.
            <span className="text-twitter-blue"> #codelove</span> dattebayo 🎶
          </div>
          <div className="flex flex-wrap gap-x-5 self-stretch text-twitter-neutral-500">
            <div className="flex items-center gap-1">
              <svg
                width="15"
                height="15"
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
          <div className="flex items-center gap-5 self-stretch font-medium leading-normal">
            <p>
              196{" "}
              <span className="font-normal text-twitter-neutral-500">
                Following
              </span>
            </p>
            <p>
              57{" "}
              <span className="font-normal text-twitter-neutral-500">
                Followers
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileHeader;
