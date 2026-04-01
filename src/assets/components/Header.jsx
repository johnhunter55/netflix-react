import React from "react";

export function Header() {
  return (
    <div className="w-full bg-neutral-900 flex items-center justify-between">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png"
        alt="Netflix"
        className="w-32 ml-2"
      />
      <div className="flex gap-4 mr-5 text-neutral-400">
        <p>Series</p>
        <p>Movies</p>
        <p>New & Popular</p>
        <p className="text-neutral-300 mx-2">Account</p>
      </div>
    </div>
  );
}
