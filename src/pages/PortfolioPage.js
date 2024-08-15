import "./PortfolioPage.css";
import weather from "../images/weather.png";
import panda from "../images/panda.png";
import condo from "../images/condo.png";
import rpg from "../images/rpg.png";
import wordle from "../images/wordle.png";
import dictionary from "../images/dictionary.png";
import menu from "../images/menu.gif"
import {AiOutlineLink, AiOutlineGithub} from "react-icons/ai"
import { IoLogoYoutube } from "react-icons/io";
export const Portfolio = () => {
    return (
        <div className="page-container mt-5">
            <div className="card-container">

            <div className="card">
                    <div className="card-img">
                        <a href={menu} target="_blank" rel="noopener noreferrer">
                            <img src={menu} className="card-img-top" alt="condo-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">To Do List</h5>
                        <div className="card-description">
                            <p>Order Food, Add Tipping</p>
                            <p>ios app for Ordering foods and Adding Tip.</p>
                            <p>Using NavigationStack, the app allows users to navigate back to the previous view and pass data to the connected view.</p>
                        </div>
            
                        <div className="card-teck-inidividual">
                            <span>Xcode</span>
                            <span>SwiftUI</span>
                            <span>Firebase</span>
                            <span>Firebase Authentication</span>
                            <span>CRUD</span>
                            <span>MVVM</span>
                            <span>SF Symbols</span>
                            <span>Customized List View</span>
                            <span>Navigation Stack</span>
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/ToDoList", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                        <button className="card-button button-web" onClick={() => { window.open("https://youtu.be/SlbUBHVAQPY", "_blank") }}>
                            <IoLogoYoutube/>
                            <span>Demo</span>
                        </button>
                    </div>
                </div>

            <div className="card">
                    <div className="card-img">
                        <a href={menu} target="_blank" rel="noopener noreferrer">
                            <img src={menu} className="card-img-top" alt="condo-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Tipping App</h5>
                        <div className="card-description">
                            <p>Order Food, Add Tipping</p>
                            <p>ios app for Ordering foods and Adding Tip.</p>
                            <p>Using NavigationStack, the app allows users to navigate back to the previous view and pass data to the connected view.</p>
                        </div>
            
                        <div className="card-teck-inidividual">
                            <span>Xcode</span>
                            <span>SwiftUI</span>
                            <span>MVVM</span>
                            <span>SF Symbols</span>
                            <span>Customized List View</span>
                            <span>Navigation Stack</span>
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/TippingSwiftUI", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                        <button className="card-button button-web" onClick={() => { window.open("https://youtu.be/SlbUBHVAQPY", "_blank") }}>
                            <IoLogoYoutube/>
                            <span>Demo</span>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <a href={condo} target="_blank" rel="noopener noreferrer">
                            <img src={condo} className="card-img-top" alt="condo-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Condo Community App</h5>
                        <div className="card-description">
                            <p>My first project after learning React.</p>
                            <p>Create a community app for condo concierges, owners, and tenants.</p>
                            <p>I utilized Json-server to enable CRUD (Create, Read, Update, Delete) functionalities.</p>
                        </div>
                        {/* <p className="card-teck-stack">Tech Stack</p> */}
                        <div className="card-teck-inidividual">
                            <span>React</span>
                            <span>Redux ToolKit</span>
                            <span>Axios</span>
                            <span>Tailwind CSS</span>
                            <span>JSON Server</span>
                            <span>DB CRUD</span>
                            <span>classnames</span>
                            <span>React Icon</span>
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/condo", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <a href={weather} target="_blank" rel="noopener noreferrer">
                            <img src={weather} className="card-img-top" alt="weather-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Weather App</h5>
                        <div className="card-description">
                            <p>Weather application designed to provide current weather data.</p>
                            <p>dynamic backgrounds change based on the local weather and time.</p>
                            <p>There's more information in rainy day.</p>
                        </div>
                        {/* <p className="card-teck-stack">Tech Stack</p> */}
                        <div className="card-teck-inidividual">
                            <span>React</span>
                            <span>Axios</span>
                            <span>Tailwind CSS</span>
                            <span>react-icons</span>
                            <span>classnames</span>
                            <span>OpenWeather API</span>
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/weather", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                        <button className="card-button button-web" onClick={() => { window.open("https://elriot.github.io/weather/", "_blank") }} >
                            <AiOutlineLink/>
                            <span>Live Web</span>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <a href={panda} target="_blank" rel="noopener noreferrer">
                            <img src={panda} className="card-img-top" alt="panda-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">My Panda App</h5>
                        <div className="card-description">
                            <p>Panda dress-up game inspired by the clothing games I played in childhood. </p>
                            <p>You can customize from 6 categories, 5 different pandas and 39 items.</p>
                            <p>Also it provides save your panda as an image file.</p>
                        </div>
                        {/* <p className="card-teck-stack">Tech Stack</p> */}
                        <div className="card-teck-inidividual">
                            <span>React</span>
                            <span>Bootstrap5</span>
                            <span>html2canvas</span>
                            <span>classnames</span>
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/panda", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                        <button className="card-button button-web" onClick={() => { window.open("https://elriot.github.io/panda/", "_blank") }} >
                            <AiOutlineLink/>
                            <span>Live Web</span>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <a href={rpg} target="_blank" rel="noopener noreferrer">
                            <img src={rpg} className="card-img-top" alt="rpg-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Rpg Portfolio</h5>
                        <div className="card-description">
                            <p>This project is a game-style portfolio inspired by RPG (Role-Playing Game).</p>
                            <p>You can navigate the character using arrow keys and interact with objects by pressing the Enter or Space Bar keys.</p>
                            <div className="card-bold">
                                <p> - Notice -</p>
                                <p> This app is optimized for PC browsers only.</p>
                            </div>
                        </div>
                        {/* <p className="card-teck-stack">Tech Stack</p> */}
                        <div className="card-teck-inidividual">
                            <span>React</span>
                            <span>Tailwind CSS</span>                            
                            <span>classnames</span>
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/rpg_portfolio", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                        <button className="card-button button-web" onClick={() => { window.open("https://elriot.github.io/rpg_portfolio/", "_blank") }} >
                            <AiOutlineLink/>
                            <span>Live Web</span>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <a href={wordle} target="_blank" rel="noopener noreferrer">
                            <img src={wordle} className="card-img-top" alt="wordle-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Wordle Game</h5>
                        <div className="card-description">
                            <p>Wordle is a game where you guess the word of the day, which is comprised of 5 letters.</p>
                            <p>It works seamlessly on both PC browsers and mobile devices.</p>
                            {/* <div className="card-bold">
                                <p> - Notice -</p>
                                <p> This app is optimized for PC browsers only.</p>
                            </div> */}
                        </div>
                        <div className="card-teck-inidividual">
                            <span>React</span>
                            <span>Bootstrap5</span>                            
                            <span>react-icons</span>
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/wordle", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                        <button className="card-button button-web" onClick={() => { window.open("https://elriot.github.io/wordle/", "_blank") }} >
                            <AiOutlineLink/>
                            <span>Live Web</span>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <a href={dictionary} target="_blank" rel="noopener noreferrer">
                            <img src={dictionary} className="card-img-top" alt="wordle-app" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Panda Dictionary</h5>
                        <div className="card-description">
                            <p>Panda Dictionary is web application tailored for managing panda profiles</p>
                            <p>Users can effortlessly view, add, edit, and delete profiles.</p>
                        </div>
                        <div className="card-teck-inidividual">
                            <span>React</span>
                            <span>Nods.js</span>                            
                            <span>MySQL</span>
                            <span>Redux ToolKit</span>
                            <span>Sequelize</span>
                            <span>Axios</span>   
                            <span>Express</span>   
                        </div>
                        <button className="card-button" onClick={() => { window.open("https://github.com/elriot/panda_dictionary", "_blank") }}>
                            <AiOutlineGithub/>
                            <span>Github Repository</span>
                        </button>
                        {/* <button className="card-button button-web" onClick={() => { window.open("https://elriot.github.io/wordle/", "_blank") }} >
                            <AiOutlineLink/>
                            <span>Live Web</span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>

    )
}