import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactsPage() {
    return (
        <>
            <Header />
            <main>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">
                            Contact Us
                        </h1>
                        <p className="col-md-8 fs-4">
                            Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the
                            examples below for how you can remix and restyle it to your liking.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}