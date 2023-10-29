import React from "react";
import SignupHeader from "../../components/Signup/SignupHeader";
import Input from "../../components/Input";

function CreateAccount1() {
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
            {/* Name Input */}
            <Input type={"Name"}>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent  placeholder:text-twitter-neutral-500 text-twitter-neutral-50 text-base leading-normal focus:outline-none"
              />
            </Input>

            {/* Email Input */}
            <Input type={"Email"}>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent  placeholder:text-twitter-neutral-500 text-twitter-neutral-50 text-base leading-normal focus:outline-none"
              />
            </Input>

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
              <Input type={"Month"}>
                <select
                  name="month-dropdown"
                  className="w-full bg-black focus:outline-none"
                >
                  <option value selected disabled />
                  <option value="Januaury">Januaury </option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </Input>

              {/* Day */}
              <Input type={"Day"}>
                <select
                  name="day-dropdown"
                  className="w-full bg-black focus:outline-none"
                >
                  <option value selected disabled />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={30}>30</option>
                  <option value={31}>31</option>
                </select>
              </Input>

              {/* Year */}
              <Input type={"Year"}>
                <select
                  name="year-dropdown"
                  className="w-full bg-black focus:outline-none"
                >
                  <option value selected disabled />
                  <option value={2023}>2023</option>
                  <option value={2022}>2022</option>
                  <option value={2021}>2021</option>
                  <option value={2020}>2020</option>
                  <option value={2019}>2019</option>
                  <option value={2018}>2018</option>
                  <option value={2017}>2017</option>
                  <option value={2016}>2016</option>
                  <option value={2015}>2015</option>
                  <option value={2014}>2014</option>
                  <option value={2013}>2013</option>
                  <option value={2012}>2012</option>
                  <option value={2011}>2011</option>
                  <option value={2010}>2010</option>
                  <option value={2009}>2009</option>
                  <option value={2008}>2008</option>
                  <option value={2007}>2007</option>
                  <option value={2006}>2006</option>
                  <option value={2005}>2005</option>
                  <option value={2004}>2004</option>
                  <option value={2003}>2003</option>
                  <option value={2002}>2002</option>
                  <option value={2001}>2001</option>
                  <option value={2000}>2000</option>
                  <option value={1999}>1999</option>
                  <option value={1998}>1998</option>
                  <option value={1997}>1997</option>
                  <option value={1996}>1996</option>
                  <option value={1995}>1995</option>
                  <option value={1994}>1994</option>
                  <option value={1993}>1993</option>
                  <option value={1992}>1992</option>
                  <option value={1991}>1991</option>
                  <option value={1990}>1990</option>
                </select>
              </Input>
            </div>
          </form>
        </main>
      </section>

      {/* Create Account Button*/}
      <section className="self-stretch">
        <a
          href="./create-account2.html"
          className="w-full py-3 px-6 rounded-signup-radius bg-twitter-neutral-50 hover:bg-twitter-neutral-200 text-black font-bold leading-normal flex justify-center items-center shadow-signup backdrop-blur-xl-1"
          rel="noopener noreferrer"
        >
          <button>Create account</button>
        </a>
      </section>
    </div>
  );
}

export default CreateAccount1;
