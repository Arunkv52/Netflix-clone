import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import MyList from "./Pages/MyList";
import RecentlyAdded from "./Pages/RecentlyAdded";
import TvShows from "./Pages/TvShows";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/recently" element={<RecentlyAdded />} />
          <Route path="/tvshows" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
