import React, { useEffect } from "react";
import axios from "../axios";
import "../row.css";

function Row({ fetchUrl, category, isLargeRow }) {
  console.log("FetchUrl", fetchUrl);
  const [movie, setMovie] = React.useState();

  useEffect(() => {
    async function getMovies() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    getMovies();
  }, [fetchUrl]);
  console.log("MMM", movie);
  return (
    <div className="row">
      <h2 className="row-title">{category}</h2>
      <div className="row-contents">
        {movie &&
          movie.map((elem) => {
            return (
              ((isLargeRow && elem.poster_path) ||
                (!isLargeRow && elem.backdrop_path)) && (
                <img
                  key={elem.id}
                  className={`row-poster && ${isLargeRow && "row-posterLarge"}`}
                  alt={`${elem.title}`}
                  src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? elem.poster_path : elem.backdrop_path
                  }`}
                />
              )
            );
          })}
      </div>
    </div>
  );
}

export default Row;
