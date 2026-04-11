import React from "react";

export function Home() {
  return (
    <div className="flex justify-center w-full h-full p-8">
      <div className="flex justify-center gap-5 flex-wrap my-auto">
        <div className="w-80 h-80 bg-neutral-900 rounded-2xl flex flex-col justify-evenly items-center p-10">
          <h1 className="text-2xl font-bold text-white">Watch Movies</h1>
          <p className="text-xl text-neutral-400">
            Watch every movies ever made very fun yaay
          </p>
        </div>
        <div className="w-80 h-80 bg-neutral-900 rounded-2xl flex flex-col justify-evenly items-center p-10">
          <h1 className="text-2xl font-bold text-white">Search for anything</h1>
          <p className="text-xl text-neutral-400">
            Search for any movies in the whole world
          </p>
        </div>
        <div className="w-80 h-80 bg-neutral-900 rounded-2xl flex flex-col justify-evenly items-center p-10">
          <h1 className="text-2xl font-bold text-white">find info</h1>
          <p className="text-xl text-neutral-400">
            click on a movie to find out more about it
          </p>
        </div>
      </div>
    </div>
  );
}
