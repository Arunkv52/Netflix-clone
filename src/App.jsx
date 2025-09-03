import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import MyList from "./Pages/MyList";
import RecentlyAdded from "./Pages/RecentlyAdded";
import TvShows from "./Pages/TvShows";
import Player from "./components/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Successful login");
        // navigate('/home')  // optional redirect
      } else {
        console.log("🚪 Logged out / Please sign in");
        // navigate('/login') // optional redirect
      }
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/recently" element={<RecentlyAdded />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/player" element={<Player />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
