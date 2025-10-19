import React, { useState, useEffect } from 'react';
// We'll use MainPage.css as the single source of truth
import './MainPage.css'; 

export const MainPage = () => {
    const [text, setText] = useState("Welcome!");
    const [fade, setFade] = useState(false);
    const texts = [
        "Welcome to my little corner of the internet",
        "Click around — it's all handmade!",
        "Hope you enjoy your stay 🍀"
    ];

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

        }, 3000); // Increased interval for a more relaxed feel

        return () => clearInterval(interval);
    }, [texts]); // Added texts to dependency array

    return (
        <div className="main-container page-container-height">
            <span className="comment-text">// A personal portfolio, handcrafted with code.</span>
            <h1 className="main-text">
                <span className="function-name">print</span>
                <span className="function-parentheses">(</span>
                <span className={`animated-text ${fade ? 'fade-out' : ''}`}>"{text}"</span>
                <span className="function-parentheses">)</span>
            </h1>
        </div>
    );
}