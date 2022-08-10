import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component{
    render() {
        return(
            <header id="header">
                <div className="nav-container">
                    <h1 id="logo"><a href="/">Brian Ssekalegga</a></h1>
                    <nav id="header-nav" aria-label="Banner navigation">
                        <button className="menu-toggle" aria-label="Toggle menu" onClick="toggleMenu()">
                            <FontAwesomeIcon icon={faBars}  />
                        </button>
                        <ul className="menu-links">
                            <li><a href="#banner"><strong>Home</strong></a></li>
                            <li><a href="#about"><strong>About me</strong></a></li>
                            <li><a href="#skills"><strong>Skills</strong></a></li>
                            <li><a href="#works"><strong>Works</strong></a></li>
                            <li><a href="#contact"><strong>Contact</strong></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
export default Header
