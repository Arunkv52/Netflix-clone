import React, { useEffect, useState } from "react";
import Cards_data from "../assets/cards/Cards_data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { Link } from "react-router";

const TitleCards = ({ title, catagory }) => {
  // Api data
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzkwYzUyMGI0MzYxN2IwNjhjNDFhNzg5NmI0NmE4YyIsIm5iZiI6MTc1NjQwOTQyNi4xODQsInN1YiI6IjY4YjBhZTUyMTRhOTJiMWY3YzYyNTFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ROBPJ0tsXTBAuP-LrZ8IINkA803swtvY3ar-I3O6hLA",
    },
  };

  // useeffect using for a data fetch
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        catagory ? catagory : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="title-card md:px-20 py-5">
        <h1 className="text-white text-2xl py-5 font-bold">
          {title ? title : "Now Playing"}
        </h1>
        {/* map method using for data passing */}
        <Carousel>
          <CarouselContent>
            {movies.map((card) => (
              <CarouselItem key={card.id} className="basis-1/6 cursor-grab">
                <Link to={`/player/${card.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                    alt={card.original_title}
                  />
                  <p className="text-white py-2 text-[20px]">
                    {card.original_title}
                  </p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default TitleCards;
