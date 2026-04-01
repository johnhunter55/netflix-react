import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

export function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput.length === 0 || searchInput.length > 1) {
        onSearch(searchInput);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput, onSearch]);

  return (
    <div className="relative group w-full max-w-2xl">
      <MdOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors duration-300 pointer-events-none group-focus-within:text-white" />

      <input
        type="text"
        placeholder="Search movies, shows, genres..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full py-3 pl-12 pr-12 text-white bg-neutrol-950 border border-zinc-700 rounded-full outline-none transition-all duration-300 placeholder:text-zinc-500 hover:bg-neutrol-900 hover:border-zinc-500 focus:bg-neutrol-800 focus:border-neutrol-500 focus:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
      />

      {searchInput && (
        <button
          onClick={() => setSearchInput("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors duration-200"
          aria-label="Clear search"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
}
