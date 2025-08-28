import React from "react";
import Navbar from "../components/Navbar";
import HeaderBg from '../assets/bg-sign.jpg'

const Home = () => {
  return (
    <div
      className="login-full w-full h-dvh object-cover"
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <Navbar />
    </div>
  );
};

export default Home;
