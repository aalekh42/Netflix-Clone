import React, { useEffect, useState } from "react";
import "../Banner.css";
import axios from "../axios";
import requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    //to fetch the movies
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      ); //to get one movie randomly
      return request;
    }
    fetchData();
  }, []);

  //If description is too long then we make it short using this fn.
  function truncate(string, n) {
    return string && string.length > n
      ? string.substr(0, n - 1) + "..."
      : string;
  }
  return (

    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.name || "MOVIE NAME" }</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
          <h1 className="banner_description">
            {truncate(`${movie.overview}`, 100)}
          </h1>
        </div>
      </div>
      <div className="fade_bottom" /> {/*Css trick to add fade */}
    </header>
  );
}

export default Banner;
