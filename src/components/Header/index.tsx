import React from "react";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png"
import './styles.css';

export const Header = () => {
    return(
        <header className="black">
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src={Avatar} alt="Uusuário" />
                </a>
            </div>
        </header>
    )
}