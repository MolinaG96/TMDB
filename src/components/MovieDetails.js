import React, { useEffect, useState } from "react";
import { API_KEY, IMAGE_PATH, Url_Base } from "../utils/data";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`${Url_Base}/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!movie.title) {
    return <div>Movie Not Found</div>;
  }

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">{movie.title}</h2>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={`${IMAGE_PATH + movie.poster_path}`}
              alt=""
              height={500}
              width="100%"
            />
          </div>
          <div className="col-md-8 mb-3">
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
