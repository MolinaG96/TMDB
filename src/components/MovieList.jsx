import React, { useEffect, useState } from "react";
import { API_KEY, IMAGE_PATH, Url_Base } from "../utils/data";
import axios from "axios";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

export default function MovieList() {
  // variables de estado, peliculas:
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //funcion peticion con api
  const fetchMovies = (searchKey) => {
    const type = searchKey ? "search" : "discover";
    return axios
      .get(`${Url_Base}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (searchKey) => {
    fetchMovies(searchKey);
  };

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Peliculas</h2>
      <SearchForm
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        onSubmit={handleSearch}
      />
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <Link
                to={`/movies/${movie.id}`}
                style={{ textDecoration: "none" }}
                movie={movie}
              >
                <img
                  src={`${IMAGE_PATH + movie.poster_path}`}
                  alt=""
                  height={500}
                  width="100%"
                />
                <h4 className="text-center">{movie.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
