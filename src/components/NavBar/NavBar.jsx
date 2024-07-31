import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <header className={"NavBar"}>
            <NavLink className="nav-link" to={''}>Home</NavLink>
            <NavLink className="nav-link" to={'/about'}>About</NavLink>
            <NavLink className="nav-link" to={'/contacts'}>Contacts</NavLink>
            <NavLink className="nav-link" to={'/pagefour'}>Page Four</NavLink>
            <NavLink className="nav-link" to={'/pagefive'}>Page Five</NavLink>
            <NavLink className="nav-link" to={'/admin'}>Admin</NavLink>
        </header>
    );
};

export default NavBar;