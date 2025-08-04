export default function MovieCard() {
    return (
        <div className="col">
            <div className="card">
                <div className="card-top">
                    <img src="" alt="" />
                </div>
                <div className="card-bottom">
                    <ul>
                        <li>
                            Title
                        </li>
                        <li>
                            Year
                        </li>
                        <li>
                            Vote
                        </li>
                        <li>
                            Genre Tag
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