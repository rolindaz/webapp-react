import Logo from '../assets/logo.jpg'

export default function Header() {
    return (
        <header className='d-flex p-4 align-items-center'>
            <div className="logo">
                <img src={Logo} alt="CineManiac Logo" />
            </div>
            <nav className='d-flex column-gap-3'>
                <a className="nav-item nav-link active" href="#" aria-current="page">
                    Home
                    <span className="visually-hidden">(current)</span>
                </a>
                <a className="nav-item nav-link" href="/ContactsPage">
                    Contacts
                </a>
            </nav>
        </header>
    )
}