import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Icon from "../img/icon.png"

export const Navbar = () => {
// const [getLike, getSetLike] = useEffect();

// function buscarLike (){

// }

// useEffect(() => {
//     buscarLike()
//   },[])

    return (
        <nav className="navbar navbar-light bg-light mb-3 container">
            <Link to="/">
                <img src={Icon}
                    alt=""
                    className="starIcon"/>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favourites
                    </button>
                    <ul className="dropdown-menu">
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};
