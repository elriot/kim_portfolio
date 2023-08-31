import { useEffect, useRef, useState } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import "./HeaderMenu.css";
import { Portfolio } from "../pages/PortfolioPage";
import { ContactPage } from "../pages/ContactPage";

const pageMap = {
    "/": "Home",
    "/portfolio": "Home",
    "/about": "About Me",
    "/portfolios": "Portfolio",
    "/contact": "Contact"
}
export default function HeaderMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [navTitle, setNavTitle] = useState("Home");
    const [navToggleVisible, setNavToggleVisible] = useState(false);
    const toggleButtonRef = useRef();
    const location = useLocation();

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    const setTitle = (buttonVisible, path) => {
        // if(buttonVisible === navToggleVisible) return;
        let title = pageMap[path] === undefined ? "Home" : pageMap[path];
        let finalTitle = !buttonVisible ? "" : "- " + title;

        setNavToggleVisible(buttonVisible);
        setNavTitle(finalTitle);
    }
    const handleNavClick = (e) => {
        const link = e.target.href;
        const path = link.substr(link.lastIndexOf("/"), link.length);
        setIsNavOpen(false);
        setTitle(navToggleVisible, path);
    }
    const handleResize = (e) => {
        if (toggleButtonRef.current) {
            const isButtonVisible = window.getComputedStyle(toggleButtonRef.current).display !== 'none';
            setTitle(isButtonVisible, location.pathname);
        }
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container nav-container">
                    <a className="navbar-brand" href="./">
                        Soopin Kim {navTitle}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleNavToggle}
                        aria-expanded={isNavOpen}
                        ref={toggleButtonRef}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ml-auto" onClick={handleNavClick}>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolios">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
