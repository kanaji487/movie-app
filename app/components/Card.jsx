import Link from "next/link";

const Card = ({ movie }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group" key={movie.id}>
        <div 
            className="w-full"
        >
            <figure>
                <img
                    className="w-full h-auto bg-cover"
                    src={IMAGE_BASE_URL + movie.poster_path}
                    alt={movie.title}
                />
            </figure>
            <div className="mt-2">
                <h2 className="truncate text-lg font-bold">{movie.title}</h2>
                <p>{movie.overview}</p>
                <div className="mt-4">
                    <Link className="bg-green-400 p-2 rounded text-white" href={"/movies/" + movie.id}>Read more</Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
