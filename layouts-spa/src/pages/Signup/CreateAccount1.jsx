import React from "react";
import { useNavigate } from "react-router-dom";
import SignupHeader from "../../components/Signup/SignupHeader";
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";
import Select, {SelectItem} from "../../components/Select";

function CreateAccount1() {
  const navigate = useNavigate();
  const months = [
    'Januaury',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dates = []
  for(let i=1;i<=31;i++) dates.push(i);
  
  const years = []
  for(let i=2023;i>=1990;i--) years.push(i);

  return (
    <div className="min-h-screen font-inter text-twitter-neutral-50 pb-5 px-[15px] bg-black flex flex-col justify-between items-start flex-shrink-0">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={1} />

        {/* Create Account Form*/}
        <main className="flex flex-col items-start gap-5 self-stretch">
          <h1 className="text-2xl leading-normal font-bold">
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
              <p className="text-[rgba(255,255,255,0.6)] text-sm font-normal leading-normal">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>

            <div className="flex items-start self-stretch gap-3">
              {/* Month */}
              <Fieldset type={"Month"} size="1/2">
                <Select name="month-dropdown">
                  <SelectItem value={""} selected disabled />
                  {months.map((month) => (
                    <SelectItem key={month} value={month} />
                  ))}
                </Select>
              </Fieldset>

              {/* Day */}
              <Fieldset type={"Day"} size="1/4">
                <Select name="day-dropdown">
                  <SelectItem value="" selected disabled />
                  {dates.map((date) => (
                    <SelectItem key={date} value={date} />
                  ))}
                </Select>
              </Fieldset>

              {/* Year */}
              <Fieldset type={"Year"} size="1/4">
                <Select name="year-dropdown">
                  <SelectItem value="" selected disabled />
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
        <button
          className="w-full py-3 px-6 rounded-signup-radius bg-twitter-neutral-50 hover:bg-twitter-neutral-200 text-black font-bold leading-normal flex justify-center items-center shadow-signup backdrop-blur-xl-1"
          onClick={() => navigate("/signup2")}
        >
          Create account
        </button>
      </section>
    </div>
  );
}

export default CreateAccount1;
