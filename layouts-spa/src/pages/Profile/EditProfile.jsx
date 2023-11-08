import React from "react";
import { useNavigate } from "react-router-dom";
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";
import Img from "../../components/Img";
import Button from "../../components/Button";
import backArrow from "../../assets/back.svg";
import banner from "../../assets/banner.jpg";
import userDP from "../../assets/rahul.jpg";
import cancel from "../../assets/cancel.svg";
import photo from "../../assets/photo.svg";

function EditProfile() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-black font-inter text-twitter-neutral-50">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex gap-5">
          {/* Back arrow */}
          <div onClick={() => navigate(-1)} className="cursor-pointer">
            <Img imgPath={backArrow} imgAlt="back-arrow" />
          </div>
          <p>Edit Profile</p>
        </div>

        {/* Save button */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center justify-center rounded-twitter bg-twitter-neutral-50 px-6 py-2 text-base font-bold leading-normal text-black hover:bg-twitter-neutral-200 disabled:opacity-50 disabled:hover:bg-twitter-neutral-50 md:rounded-full md:px-[93px] md:py-[15px]"
        >
          Save
        </button>
        <Button variant="solid" text="Save" type="primary" />
      </header>

      {/* Cover & Profile image edit */}
      <section className="relative mb-12 self-stretch border">
        {/* Cover image edit section */}
        <div className="relative self-stretch">
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4 bg-transparent opacity-60">
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
        <div className="absolute bottom-0 left-4 translate-y-1/2">
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
      <main className="flex flex-col gap-5 px-4 py-3">
        <section className="self-stretch">
          <Fieldset type={"Name"}>
            <Input type="text" placeholder="Name" defaultValue="Rahul Kanna" />
          </Fieldset>
        </section>

        <section>
          <Fieldset type={"Bio"}>
            <textarea
              name="tweet-content"
              placeholder="Bio"
              className="h-16 w-full resize-none overflow-y-auto bg-transparent text-base leading-normal placeholder:text-twitter-neutral-600 focus:outline-none"
              wrap="soft"
              spellCheck="true"
              dir="auto"
              autoCapitalize="sentences"
              defaultValue={
                "Techie | Otaku | Learner, Dreamer, Doer. I tweet about web dev and anime. #codelove dattebayo 🎶"
              }
            />
          </Fieldset>
        </section>

        <section>
          <Fieldset type={"Location"}>
            <Input
              type="text"
              placeholder="Location"
              defaultValue="Hyderabad, Telangana"
            />
          </Fieldset>
        </section>

        <section>
          <Fieldset type={"Website"}>
            <Input
              type="text"
              placeholder="Website"
              defaultValue="https://www.github.com/imrahulkanna"
            />
          </Fieldset>
        </section>
      </main>
    </div>
  );
}

export default EditProfile;