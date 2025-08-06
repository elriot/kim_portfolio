import "./PortfolioPage.css";
import weather from "../images/weather.png";
import panda from "../images/panda.png";
import condo from "../images/condo.png";
import rpg from "../images/rpg.png";
import wordle from "../images/wordle.png";
import dictionary from "../images/dictionary.png";
import menu from "../images/menu.gif";
import todo from "../images/todo.gif";
import weatherApp from "../images/weatherApp.png";
import lulu from "../images/lululemon.gif";
import ball from "../images/ball.png";
import blog from "../images/blog.png";

import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { FaUnity } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
export const Portfolio = () => {
  return (
    <div className="page-container mt-5">
      <div className="card-container">

        <div className="card">
          <div className="card-img">
            <a href={blog} target="_blank" rel="noopener noreferrer">
              <img src={blog} className="card-img-top" alt="panda-app" />
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Japan Onsen Tour Guide Blog</h5>
            <div className="card-description">
							<p>
								Tour-guide blog for a BCIT Technical Writing project, built with <strong>Vite + React</strong> and structured as reusable components for easy content updates.
							</p>
							<p className="">
								🔸 The project is currently in progress. Some errors might occur on certain pages.
							</p>
            </div>
            {/* <p className="card-teck-stack">Tech Stack</p> */}
            <div className="card-teck-inidividual">
              <span>Vite + React</span>
              <span>Tilewind CSS</span>
              <span>React Router</span>
              <span>Reusable Components</span>
							<span>Responsive Design</span>
            </div>
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/JapanOnsenTour", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://elriot.github.io/JapanOnsenTour/", "_blank");
              }}
            >
              <AiOutlineLink />
              <span>Live Web</span>
            </button>
          </div>
        </div>


        <div className="card">
          <div className="card-img">
            <a href={ball} target="_blank" rel="noopener noreferrer">
              <img src={ball} className="card-img-top" alt="rpg-app" />
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Merge Ball 3D</h5>
            <div className="card-description">
              <p>
			  Merge Ball 3D is a casual puzzle game inspired by the Suika Game, where players merge same-sized balls and stack them strategically to earn points.
              </p>
              {/* <div className="card-bold">
                                <p> - Notice -</p>
                                <p> This app is optimized for PC browsers only.</p>
                            </div> */}
            </div>
            {/* <p className="card-teck-stack">Tech Stack</p> */}
            <div className="card-teck-inidividual">
              <span>Unity</span>
              <span>C#</span>
              <span>Singleton Pattern</span>
              <span>WebGL</span>
              <span>Puzzle/arcade mechanics</span>
              <span>Physics-based merging</span>
              <span>Responsive UI</span>
              <span>World-space UI modal</span>
              <span>Sound & volume control</span>
              <span>Player Prefabs</span>
            </div>
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/Programming-Theory-Repo", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
			<button
              className="card-button button-web"
              onClick={() => {
                window.open("https://play.unity.com/en/games/f7b777cf-1d9e-4e9e-8916-97cf4f5a1ac7/webgl-builds", "_blank");
              }}
            >
              <FaUnity />
              <span>Play</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <a href={lulu} target="_blank" rel="noopener noreferrer">
              <img src={lulu} className="card-img-top" alt="rpg-app" />
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Lululemon App</h5>
            <div className="card-description">
              <p>
			  A study project inspired by the Lululemon iOS app. Implemented map functionality using MapKit to replicate location-based features.
              </p>
              {/* <div className="card-bold">
                                <p> - Notice -</p>
                                <p> This app is optimized for PC browsers only.</p>
                            </div> */}
            </div>
            {/* <p className="card-teck-stack">Tech Stack</p> */}
            <div className="card-teck-inidividual">
              <span>Xcode</span>
              <span>SwiftUI</span>
              <span>MapKit</span>
              {/* <span>Firebase</span>
              <span>Firebase Authentication</span> */}
              {/* <span>CRUD</span> */}
              <span>MVVM</span>
              {/* <span>SF Symbols</span> */}
              <span>Customized List View</span>
              <span>Custom Toolbar</span>
              <span>Tab View</span>
            </div>
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/Lululemon", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            {/* <button className="card-button button-web" onClick={() => { window.open("https://elriot.github.io/rpg_portfolio/", "_blank") }} >
                            <AiOutlineLink />
                            <span>Live Web</span>
                        </button>
                        <button className="card-button button-web" onClick={() => { window.open("https://youtu.be/NttITK7jMik", "_blank") }}>
                            <IoLogoYoutube />
                            <span>Demo</span>
                        </button> */}
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
              <p>
                This project is a game-style portfolio inspired by RPG
                (Role-Playing Game).
              </p>
              <p>
                You can navigate the character using arrow keys and interact
                with objects by pressing the Enter or Space Bar keys.
              </p>
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
            <button
              className="card-button"
              onClick={() => {
                window.open(
                  "https://github.com/elriot/rpg_portfolio",
                  "_blank"
                );
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open(
                  "https://elriot.github.io/rpg_portfolio/",
                  "_blank"
                );
              }}
            >
              <AiOutlineLink />
              <span>Live Web</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://youtu.be/NttITK7jMik", "_blank");
              }}
            >
              <IoLogoYoutube />
              <span>Demo</span>
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
              <p>
                Panda dress-up game inspired by the clothing games I played in
                childhood.{" "}
              </p>
              <p>
                You can customize from 6 categories, 5 different pandas and 39
                items.
              </p>
              <p>Also it provides save your panda as an image file.</p>
            </div>
            {/* <p className="card-teck-stack">Tech Stack</p> */}
            <div className="card-teck-inidividual">
              <span>React</span>
              <span>Bootstrap5</span>
              <span>html2canvas</span>
              <span>classnames</span>
            </div>
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/panda", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://elriot.github.io/panda/", "_blank");
              }}
            >
              <AiOutlineLink />
              <span>Live Web</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <a href={weatherApp} target="_blank" rel="noopener noreferrer">
              <img src={weatherApp} className="card-img-top" alt="condo-app" />
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <div className="card-description">
              <p>Simple iOS Weather App feching data from a Weather API</p>
              <p>
                Fetches current wewather, weekly forecast, and location data.
              </p>
            </div>

            <div className="card-teck-inidividual">
              <span>Xcode</span>
              <span>SwiftUI</span>
              <span>OpenWeather API</span>
              <span>Tab View</span>
              <span>Custom Views</span>
            </div>
            <button
              className="card-button"
              onClick={() => {
                window.open(
                  "https://github.com/elriot/WeatherAppSwift",
                  "_blank"
                );
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://youtu.be/Q4u1QcBBjGw", "_blank");
              }}
            >
              <IoLogoYoutube />
              <span>Demo</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <a href={todo} target="_blank" rel="noopener noreferrer">
              <img src={todo} className="card-img-top" alt="condo-app" />
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">To Do List</h5>
            <div className="card-description">
              <p>
                Simple To Do List App with full CRUD functionality implemented
                using Firebase.{" "}
              </p>
              <p>
                It offers user registration and login features, and provides
                three page views: To Do, In Progress, and Done.
              </p>
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
              <span>Page View</span>
            </div>
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/ToDoList", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://youtu.be/KCCrN0AIVbs", "_blank");
              }}
            >
              <IoLogoYoutube />
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
              <p>
                Using NavigationStack, the app allows users to navigate back to
                the previous view and pass data to the connected view.
              </p>
            </div>

            <div className="card-teck-inidividual">
              <span>Xcode</span>
              <span>SwiftUI</span>
              <span>MVVM</span>
              <span>SF Symbols</span>
              <span>Customized List View</span>
              <span>Navigation Stack</span>
            </div>
            <button
              className="card-button"
              onClick={() => {
                window.open(
                  "https://github.com/elriot/TippingSwiftUI",
                  "_blank"
                );
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://youtu.be/B-CeOr7n2yM", "_blank");
              }}
            >
              <IoLogoYoutube />
              <span>Demo</span>
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
              <p>
                Wordle is a game where you guess the word of the day, which is
                comprised of 5 letters.
              </p>
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
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/wordle", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://elriot.github.io/wordle/", "_blank");
              }}
            >
              <AiOutlineLink />
              <span>Live Web</span>
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
              <p>
                Weather application designed to provide current weather data.
              </p>
              <p>
                dynamic backgrounds change based on the local weather and time.
              </p>
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
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/weather", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            <button
              className="card-button button-web"
              onClick={() => {
                window.open("https://elriot.github.io/weather/", "_blank");
              }}
            >
              <AiOutlineLink />
              <span>Live Web</span>
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
              <p>
                Create a community app for condo concierges, owners, and
                tenants.
              </p>
              <p>
                I utilized Json-server to enable CRUD (Create, Read, Update,
                Delete) functionalities.
              </p>
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
            <button
              className="card-button"
              onClick={() => {
                window.open("https://github.com/elriot/condo", "_blank");
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
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
              <p>
                Panda Dictionary is web application tailored for managing panda
                profiles
              </p>
              <p>
                Users can effortlessly view, add, edit, and delete profiles.
              </p>
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
            <button
              className="card-button"
              onClick={() => {
                window.open(
                  "https://github.com/elriot/panda_dictionary",
                  "_blank"
                );
              }}
            >
              <AiOutlineGithub />
              <span>Github</span>
            </button>
            {/* <button className="card-button button-web" onClick={() => { window.open("https://elriot.github.io/wordle/", "_blank") }} >
                            <AiOutlineLink/>
                            <span>Live Web</span>
                        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
