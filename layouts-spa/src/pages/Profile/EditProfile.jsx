import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input'
import Img from "../../components/Img";
import backArrow from "../../assets/back.svg";
import banner from "../../assets/banner.jpg";
import userDP from "../../assets/rahul.jpg";
import cancel from '../../assets/cancel.svg';
import photo from '../../assets/photo.svg';

function EditProfile() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-twitter-neutral-50 font-inter flex flex-col">
      <header className="py-3 px-4 flex justify-between items-center">
        <div className="flex gap-5">
          {/* Back arrow */}
          <div onClick={() => navigate(-1)} className='cursor-pointer'>
            <Img imgPath={backArrow} imgAlt="back-arrow" />
          </div>
          <p>Edit Profile</p>
        </div>

        {/* Save button */}
        <button
          onClick={() => navigate("/profile")}
          className="py-2 px-5 flex justify-center items-center gap-2.5 rounded-twitter bg-twitter-neutral-50 hover:bg-twitter-neutral-200 disabled:opacity-50 disabled:hover:bg-twitter-blue md:py-[15px] md:px-[93px] md:rounded-full"
        >
          <p className="text-black text-base font-bold leading-normal">Save</p>
        </button>
      </header>

      {/* Cover & Profile image edit */}
      <section className="mb-12 relative self-stretch border">
        {/* Cover image edit section */}
        <div className="relative self-stretch">
          <div className="flex justify-center items-center gap-4 bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60">
            <Img
              imgPath={photo}
              imgAlt="photo-icon"
              style="p-2 bg-twitter-neutral-900 rounded-full cursor-pointer"
            />
            <Img
              imgPath={cancel}
              imgAlt="cancel-icon"
              style="p-2 bg-twitter-neutral-900 rounded-full cursor-pointer"
            />
          </div>
          <Img imgPath={banner} imgAlt="banner" style="w-full" />
        </div>

        {/* Profile image edit section */}
        <div className="absolute bottom-0 translate-y-1/2 left-4">
          <Img
            imgPath={userDP}
            imgAlt="user-dp"
            style="w-24 h-24 rounded-full border-4 border-black"
          />
          <Img
            imgPath={photo}
            imgAlt="photo-icon"
            style="p-2 bg-twitter-neutral-900 rounded-full bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 cursor-pointer"
          />
        </div>
      </section>

      {/* User details edit section */}
      <main className="py-3 px-4 flex flex-col gap-5">
        <section className="self-stretch">
          <Input type={"Name"}>
            <input
              type="text"
              placeholder="Name"
              defaultValue="Rahul Kanna"
              className="w-full bg-transparent  placeholder:text-twitter-neutral-500 text-twitter-neutral-50 text-base leading-normal focus:outline-none"
            />
          </Input>
        </section>

        <section>
          <Input type={"Bio"}>
            <textarea
              name="tweet-content"
              placeholder="Bio"
              className="w-full h-16 bg-transparent text-base leading-normal placeholder:text-twitter-neutral-600 focus:outline-none resize-none overflow-y-auto"
              wrap="soft"
              spellCheck="true"
              dir="auto"
              autoCapitalize="sentences"
              defaultValue={
                "Techie | Otaku | Learner, Dreamer, Doer. I tweet about web dev and anime. #codelove dattebayo 🎶"
              }
            />
          </Input>
        </section>

        <section>
          <Input type={"Location"}>
            <input
              type="text"
              placeholder="Location"
              defaultValue="Hyderabad, Telangana"
              className="w-full bg-transparent  placeholder:text-twitter-neutral-500 text-twitter-neutral-50 text-base leading-normal focus:outline-none"
            />
          </Input>
        </section>

        <section>
          <Input type={"Webiste"}>
            <input
              type="text"
              placeholder="Website"
              defaultValue="https://www.github.com/imrahulkanna"
              className="w-full bg-transparent  placeholder:text-twitter-neutral-500 text-twitter-neutral-50 text-base leading-normal focus:outline-none"
            />
          </Input>
        </section>
      </main>
    </div>
  );
}

export default EditProfile;