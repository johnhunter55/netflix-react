import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { MoviesLayout } from "./pages/MoviesLayout.jsx";
import { Movies } from "./pages/Movies.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { MovieDetails } from "./pages/MovieDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="about" element={<About />} />
        <Route path="details/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}
