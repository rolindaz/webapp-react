import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MoviePage() {
    return (
        <>
            <Header />
            <main>
                <div className="card mb-3" style="max-width: 540px;">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">
                                    Title
                                </h4>
                                <p className="card-text">
                                    Trama
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Genere
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" href="#">
                                    Summary
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Screenshots
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li>
                                <b>
                                    Release Year:
                                </b>
                                <span></span>
                            </li>
                            <li>
                                <b>
                                    Director:
                                </b>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}