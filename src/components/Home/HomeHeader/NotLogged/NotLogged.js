import React from "react";
import {Link} from "react-router-dom";

const NotLogged = () => {
    return (
        <>
            <Link className="loginLink" to={'/logowanie'}>Zaloguj</Link>
            <Link className="loginLink registerLink" to={'/rejestracja'}>Załóż konto</Link>
        </>
    )
};

export default NotLogged;