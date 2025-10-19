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
};

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
    };

    const handleNavClick = (e) => {
        const link = e.target.href;
        if (link) {
            const path = link.substr(link.lastIndexOf("/"), link.length);
            setTitle(navToggleVisible, path);
        }
        setIsNavOpen(false);
    };

    const handleResize = () => {
        if (toggleButtonRef.current) {
            const isButtonVisible = window.getComputedStyle(toggleButtonRef.current).display !== 'none';
            setTitle(isButtonVisible, location.pathname);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [location.pathname]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container nav-container">
                    <a className="navbar-brand" href="./">
                        Soopin Kim {navTitle}
                    </a>

                    {/* --- 오른쪽 컨트롤 버튼들을 그룹으로 묶었습니다 --- */}
                    <div className="header-controls">
                        <ThemeToggleButton />
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={handleNavToggle}
                            aria-expanded={isNavOpen}
                            ref={toggleButtonRef}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

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
                    </div>
                </div>
            </nav>
        </div>
    );
}