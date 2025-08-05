import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


export default function MoviePage() {

    const { id } = useParams()
    const api_url = `${import.meta.env.VITE_BACKEND_API_SERVER}${import.meta.env.VITE_BACKEND_MOVIES_ENDPOINT}${id}`
    const [movie, setMovie] = useState({})
    const navigation = useNavigate()

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log();
                if (data.error) {
                    console.log('There is an error')
                    navigation('/not-found')
                }
                setMovie(data)
            })
    }, [])

    return (
        <>
            <main>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={import.meta.env.VITE_BACKEND_API_SERVER + '/' + movie.image} className="img-fluid rounded-start" alt={movie.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {movie.title}
                                </h4>
                                <p className="card-text">
                                    {movie.abstract}
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        {movie.genre}
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
            </main >
        </>
    )
}