import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header">
                <div className="header__left">

                    <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
                    <Link to="/movies/popular" className="link_head"> <span>Popular</span></Link>
                    <Link to="/movies/top_rated" className="link_head" ><span>Top Rated</span></Link>
                    <Link to="/movies/upcoming" className="link_head"><span>Upcoming</span></Link>

                </div>

            </div>
        </>
    );
}

export default Header