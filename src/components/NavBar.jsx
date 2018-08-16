import React from 'react'
import {Link} from 'react-router-dom'

function NavBar () {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand logo" target="_blank" href="https://www.nytimes.com/"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Link className="nav-item nav-link" to="/">Top stories</Link>
                    <Link className="nav-item nav-link" to="/fashion">Fashion</Link>
                    <Link className="nav-item nav-link" to="/politics">Politics</Link>
                    <Link className="nav-item nav-link" to="/business">Business</Link>
                    <Link className="nav-item nav-link" to="/movies">Movies</Link>
                    <Link className="nav-item nav-link" to="/books">Books</Link>
                    <Link className="nav-item nav-link" to="/world">World</Link>
                    <Link className="nav-item nav-link" to="/insider">Insider</Link>
                    <Link className="nav-item nav-link" to="/technology">Technology</Link>
                    <Link className="nav-item nav-link" to="/science">Science</Link>
                </div>
        </div>
        </nav>
    )
}

export default NavBar