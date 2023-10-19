import Link from "next/link";

const Card = ({ movie }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <div className="max-w-[20rem] h-auto">
        <Link 
            href={"/movies/" + movie.id} 
            className="card w-full bg-base-100 shadow-xl"
        >
            <figure>
                <img
                    className="w-full h-auto bg-cover"
                src={IMAGE_BASE_URL + movie.poster_path}
                alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.overview}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </Link>
    </div>
  );
};

export default Card;
