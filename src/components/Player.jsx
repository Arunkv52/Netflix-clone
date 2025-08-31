import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate, useParams } from "react-router";



const Player = () => {
  const navigate = useNavigate();
  const [datamovie, setDataMovie] = useState({});
  const { id } = useParams(); // id from URL like /player/755898


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzkwYzUyMGI0MzYxN2IwNjhjNDFhNzg5NmI0NmE4YyIsIm5iZiI6MTc1NjQwOTQyNi4xODQsInN1YiI6IjY4YjBhZTUyMTRhOTJiMWY3YzYyNTFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ROBPJ0tsXTBAuP-LrZ8IINkA803swtvY3ar-I3O6hLA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((data) => setDataMovie(data.results[0])) // use first video
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player-all md:px-20">
      <div className="text-white py-3">
        <p
          className="md:flex justify-end items-center gap-2 text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Close &nbsp;
          <IoIosCloseCircle />
        </p>
      </div>

      <div>
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${datamovie?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div>
          <p className="text-white">Name: {datamovie.name}</p>
          <p className="text-white">  Published At: {datamovie.published_at?.slice(0, 10)}
</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
