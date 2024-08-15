// import "./MainPage.css";
import React, { useState, useEffect } from 'react';
import './MainPage2.css'; 

export const MainPage = () => {
    const [text, setText] = useState("Welcome!");
    const [fade, setFade] = useState(false);
    const texts = ["Hello!", "Enjoy", "My Homepage"];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); 

            setTimeout(() => {
                setText((prevText) => {
                    const currentIndex = texts.indexOf(prevText);
                    const nextIndex = (currentIndex + 1) % texts.length;
                    return texts[nextIndex];
                });
                setFade(false); 
            }, 1000); 

        }, 3000); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <div className="main-container">
            <span className="comment-text comment">// Welcoming message for everyone</span>
            <h1 className="main-text">
                <span className="function-name">print</span>
                <span className="function-parentheses">(</span>
                <span className={`animated-text func2 ${fade ? 'fade-out' : ''}`}>"{text}"</span>
                <span className="function-parentheses">)</span>
            </h1>
        </div>
    );
}