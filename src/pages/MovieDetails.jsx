import { useLocation, NavLink, useParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

export function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  const movie = location.state?.movie;

  if (!movie) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white mb-4">Movie details not found.</h2>
        <NavLink
          className="text-xl text-red-500 hover:text-red-400"
          to="/movies"
        >
          Go Back
        </NavLink>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      <NavLink
        className="text-xl text-red-500 hover:text-red-400 p-10 pl-30 inline-block w-fit"
        to="/movies"
      >
        Go Back
      </NavLink>
      <div className="w-full flex justify-center pb-10">
        <div className="w-full max-w-sm bg-neutral-900 rounded-2xl shadow-2xl p-4">
          <MovieCard movie={movie} />
        </div>
      </div>
    </div>
  );
}
