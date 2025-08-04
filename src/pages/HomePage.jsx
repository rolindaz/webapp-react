import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <div class="p-5 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="display-5 fw-bold">
                            Welcome to CineManiac
                        </h1>
                        <p class="col-md-8 fs-4">
                            Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the
                            examples below for how you can remix and restyle it to your liking.
                        </p>
                    </div>
                </div>
                <MovieList />
            </main>
            <Footer />
        </>
    )
}