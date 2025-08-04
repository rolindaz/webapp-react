export default function MovieCard({ movie }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-top">
                    <img src={``} alt={movie.title} />
                </div>
                <div className="card-bottom">
                    <ul>
                        <li>
                            {movie.title}
                        </li>
                        <li>
                            {movie.release_year}
                        </li>
                        <li>
                            Vote
                        </li>
                        <li>
                            {movie.genre}
                        </li>
                    </ul>
                    <button className="btn btn-primary">
                        View details
                    </button>
                </div>
            </div>
        </div>
    )
}