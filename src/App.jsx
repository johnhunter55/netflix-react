import React, { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Routes, Route, NavLink } from "react-router-dom";
import { Movies } from "./components/Movies.jsx";
import { About } from "./components/About.jsx";
import { Home } from "./components/Home.jsx";

export default function App() {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-white font-bold"
      : "text-neutral-400 hover:text-white transition-colors";
  return (
    <div className="flex flex-col bg-neutral-800 h-screen w-full items-center overflow-hidden">
      <Header />

      <main className="flex-1 w-full overflow-y-auto">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
