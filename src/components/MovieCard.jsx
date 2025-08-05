import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-top">
                    <img src={`${import.meta.env.VITE_BACKEND_API_SERVER}/${movie.image}`} alt={movie.title} className="w-100 h-100" />
                </div>
                <div className="card-bottom p-3 d-flex flex-column">
                    <ul className="list-unstyled">
                        <li>
                            <h4>
                                {movie.title}
                            </h4>
                        </li>
                        <li className="d-flex justify-content-between">
                            <span>
                                Vote
                            </span>
                            <span>
                                {movie.release_year}
                            </span>
                        </li>
                        <li>
                            {movie.genre}
                        </li>
                    </ul>
                    <Link to={`/movies/${movie.id}`}>
                        <button className="btn btn-primary">
                            View details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}