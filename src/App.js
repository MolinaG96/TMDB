import React from "react";
import "./App.css";
import { MovieList, Navbar } from "./components/index";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignInForm from "./components/SignInForm";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
