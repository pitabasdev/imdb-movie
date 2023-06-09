import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="Netflix Logo" className="header__logo" />
                        <Link to="/movies/popular">Popular</Link>
                        <Link to="/movies/top_rated">Top Rated</Link>
                        <Link to="/movies/upcoming">Upcoming</Link>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default Header