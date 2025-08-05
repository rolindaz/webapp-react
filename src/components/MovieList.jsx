import { useGlobalContext } from "../contexts/GlobalContext";
import MovieCard from "./MovieCard";

export default function MovieList() {

    const { movies } = useGlobalContext()

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-gap-4">
                {
                    movies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })
                }
            </div>
        </div>
    )
}