import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "./HeaderMenu.css";
import ThemeToggleButton from "./ThemeToggleButton";

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
        let title = pageMap[path] === undefined ? "Home" : pageMap[path];
        let finalTitle = !buttonVisible ? "" : "- " + title;
        setNavToggleVisible(buttonVisible);
        setNavTitle(finalTitle);
    }

    const handleNavClick = (e) => {
        const link = e.target.href;
        if (link) {
            const path = link.substr(link.lastIndexOf("/"), link.length);
            setTitle(navToggleVisible, path);
        }
        setIsNavOpen(false);
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
    }, [location.pathname]); // location.pathname added to dependency array

    return (
        <div>
            {/* --- 'bg-light' 클래스를 제거했습니다 --- */}
            <nav className="navbar navbar-expand-lg">
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
                            <li className="nav-item">
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
                        <ThemeToggleButton />
                    </div>
                </div>
            </nav>
        </div>
    )
}