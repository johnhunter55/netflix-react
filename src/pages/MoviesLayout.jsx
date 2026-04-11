import { Outlet, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header.jsx";

export function MoviesLayout() {
  return (
    <div className="flex flex-col bg-neutral-800 h-screen w-full items-center overflow-hidden">
      <Header />
      <main className="flex-1 w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
