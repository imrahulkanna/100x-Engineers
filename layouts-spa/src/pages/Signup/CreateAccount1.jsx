import React from "react";
import { useNavigate } from "react-router-dom";
import SignupHeader from "../../components/Signup/SignupHeader";
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";
import Select, { SelectItem } from "../../components/Select";
import Button from "../../components/Button";


function CreateAccount1() {
  const navigate = useNavigate();
  const months = [
    "Januaury",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dates = [];
  for (let i = 1; i <= 31; i++) dates.push(i);

  const years = [];
  for (let i = 2023; i >= 1990; i--) years.push(i);

  return (
    <div className="flex min-h-screen flex-shrink-0 flex-col items-start justify-between bg-black px-[15px] pb-5 font-inter text-twitter-neutral-50">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={1} />

        {/* Create Account Form*/}
        <main className="flex flex-col items-start gap-5 self-stretch">
          <h1 className="text-2xl font-bold leading-normal">
            Create your account
          </h1>
          <form className="flex flex-col items-start gap-8 self-stretch">
            {/* Name Fieldset */}
            <Fieldset type={"Name"}>
              <Input type="text" placeholder="Name" />
            </Fieldset>

            {/* Email Fieldset */}
            <Fieldset type={"Email"}>
              <Input type="email" placeholder="Email" />
            </Fieldset>

            <div className="flex flex-col items-start gap-2 self-stretch">
              <p className="text-base-1 font-bold leading-normal">
                Date of birth
              </p>
              <p className="text-sm font-normal leading-normal text-[rgba(255,255,255,0.6)]">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>

            <div className="flex items-start gap-3 self-stretch">
              {/* Month */}
              <Fieldset type={"Month"} size="1/2">
                <Select name="Month">
                  <SelectItem value={""} disabled />
                  {months.map((month) => (
                    <SelectItem key={month} value={month} />
                  ))}
                </Select>
              </Fieldset>

              {/* Day */}
              <Fieldset type={"Day"} size="1/4">
                <Select name="Day">
                  <SelectItem value="" disabled />
                  {dates.map((date) => (
                    <SelectItem key={date} value={date} />
                  ))}
                </Select>
              </Fieldset>

              {/* Year */}
              <Fieldset type={"Year"} size="1/4">
                <Select name="Year">
                  <SelectItem value="" disabled />
                  {years.map((year) => (
                    <SelectItem key={year} value={year} />
                  ))}
                </Select>
              </Fieldset>
            </div>
          </form>
        </main>
      </section>

      {/* Create Account Button*/}
      <section className="self-stretch">
        {/* <button
          className="flex w-full items-center justify-center rounded-signup-radius bg-twitter-neutral-50 px-6 py-3 font-bold leading-normal text-black shadow-signup backdrop-blur-xl-1 hover:bg-twitter-neutral-200"
          onClick={() => navigate("/signup2")}
        >
          Create account
        </button> */}
        <Button
          variant="solid"
          text="Create account"
          type="primary"
          onClick={() => navigate("/signup2")}
        />
      </section>
    </div>
  );
}

export default CreateAccount1;
