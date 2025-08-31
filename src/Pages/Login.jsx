import React, { useState } from "react";
import LoginBg from "../assets/login-bg.jpg";
import Logo from "../assets/Logo.png";
import Footer from "../components/Footer";

const Login = () => {
  // Read more and less
  const [read, setRead] = useState(false); //read is a false & setRead is a true

  // sign and signup
  const [signin, setSignin] = useState(true); //sign is a true and siginup is a false

  return (
    <>
      <div
        className="login-page w-full h-dvh"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${LoginBg})` }}
      >
        <div className="logo py-5 md:px-40 px-5">
          <img src={Logo} alt="" className="w-[150px]" />
        </div>
        {/* Form start */}
        <form className="md:w-1/3 w-full relative md:top-0 top-10 md:left-1/3 md:px-0 px-5">
          <div className="form-container bg-black/80 py-8 md:px-10 px-5">
            <h1 className="text-white md:text-4xl text-2xl pb-5">
              {signin ? "Sign in" : "Sign up"}
            </h1>
            {/* add a username while sign in */}
            {!signin && (
              <div>
                <label htmlFor="text"></label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter User Name"
                  className="bg-[#151311] text-white py-3 px-5 w-full my-3 rounded-[5px]"
                />
              </div>
            )}
            {/* input field Start */}
            {/* email Address */}
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Email Address"
                className="bg-[#151311] text-white py-3 px-5 w-full my-3 rounded-[5px]"
              />
            </div>
            {/* password details */}
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                className="bg-[#151311] text-white py-3 px-5 w-full my-3 rounded-[5px]"
              />
            </div>
            {/* button start */}
            <div>
              <button
                type="submit"
                className="bg-red-700 w-full py-2 text-white font-semibold mt-3 cursor-pointer"
              >
                {signin ? "Sign in" : "Sign up"}
              </button>
            </div>
            {/* Remember me */}
            {signin && (
              <div className="text-white py-5">
                <input type="checkbox" name="checkbox" id="" /> Remember me
              </div>
            )}

            {/* new user or exist user */}
            <div className="py-3">
              <p
                className="text-white cursor-pointer"
                onClick={() => {
                  setSignin((prev) => !prev); //The functional updater form (prev) => !prev receives the previous state value and returns the next value.
                }}
              >
                <span className="text-white/40 cursor-none">
                  {signin
                    ? "New to Netflix?"
                    : "Already you have an account ? "}
                </span>{" "}
                {signin ? "Sign up" : "Sign in"}
              </p>
            </div>
            {/* Read more start */}
            <div>
              <p className="text-white/60 py-4 text-[12px]">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
              <p
                className="text-blue-600 underline text-[13px] cursor-pointer"
                onClick={() => {
                  setRead(!read);
                }}
              >
                {read ? "less" : "know more"}
              </p>

              {read && (
                <p className="text-white/60 py-4 text-[12px]">
                  The information collected by Google reCAPTCHA is subject to
                  the Google Privacy Policy and Terms of Service, and is used
                  for providing, maintaining, and improving the reCAPTCHA
                  service and for general security purposes (it is not used for
                  personalised advertising by Google).
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
