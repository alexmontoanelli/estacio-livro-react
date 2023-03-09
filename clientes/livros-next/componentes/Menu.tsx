import React  from "react"
import Link from 'next/link'


export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/LivroLista">Catálogo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/LivroDados">Novo</a>
            </li>
            </ul>
            
        </div>
        </nav>
    )
}