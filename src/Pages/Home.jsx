import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeaderBg from "../assets/bg-sign.jpg";
import Footer from "../components/Footer";
import { FaPlay } from "react-icons/fa";
import TitleCards from "../components/TitleCards";

const Home = () => {


  return (
    <>
      <div
        className="login-full w-full h-dvh object-cover bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${HeaderBg})`,
        }}
      >
        <Navbar />
        <div className="content md:px-20 absolute top-30 w-1/2">
          <h1 className="text-6xl text-white font-bold">
            The Great <br /> Indian
          </h1>
          <p className="text-white py-2">
            Smart, sarcastic and a little dead inside, Wednesday Addams
            investigates twisted mysteries while making new friends — and foes —
            at Nevermore Academy.
          </p>
          <div className="md:flex justify-start items-center gap-5 py-3">
            <button className="play-btn font-semibold rounded-[2px] bg-white md:flex justify-around items-center gap-3 w-fit py-2 px-5">
              <FaPlay />
              Play
            </button>
            <button className="play-btn font-semibold rounded-[2px] bg-gray-800 text-white md:flex justify-around items-center gap-3 w-fit py-2 px-5">
              More info
            </button>
          </div>
        </div>
        <div className="relative top-[50%]">
          <TitleCards />
        </div>
      </div>
      <div className="pt-50">
        <TitleCards title={'Popular'} catagory={'popular'}/>
        <TitleCards title={'Top Rated'} catagory={'top_rated'}/>
        <TitleCards title={'Upcoming'} catagory={'upcoming'}/>
      </div>

      <Footer />
    </>
  );
};

export default Home;
