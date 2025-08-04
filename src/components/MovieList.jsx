import MovieCard from "./MovieCard";

export default function MovieList() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                <MovieCard />
            </div>
        </div>
    )
}