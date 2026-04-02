import React from "react";
import { NavLink } from "react-router-dom";
import { Movies } from "./Movies.jsx";
import { About } from "./About.jsx";
import { Home } from "./Home.jsx";

export function Header() {
  return (
    <div className="w-full bg-neutral-900 flex items-center justify-between">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png"
        alt="Netflix"
        className="w-40 ml-2"
      />
      <div className="flex gap-4 mr-5 text-neutral-400">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/About">About</NavLink>
        <p className="text-neutral-300 mx-2">Account</p>
      </div>
    </div>
  );
}
