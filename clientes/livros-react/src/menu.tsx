export default function Menu() {

    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Catálogo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/dados">Novo</a>
            </li>
            </ul>
            
        </div>
        </nav>
    )

}