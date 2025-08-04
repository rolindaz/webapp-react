import { use } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

export default function HomePage() {


    return (
        <>
            <Header />
            <main>
                <div className="jumbotron p-5 mb-4 bg-light text-white d-flex align-items-center">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">
                            Welcome to CineManiac
                        </h1>
                        <p className="col-md-8 fs-4">
                            Get lost in a world of movies.
                        </p>
                    </div>
                </div>
                <MovieList />
            </main>
            <Footer />
        </>
    )
}