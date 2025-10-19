import blog from "../images/blog.png";
import ball from "../images/ball.png";
import lulu from "../images/lululemon.gif";
import rpg from "../images/rpg.png";
import panda from "../images/panda.png";
import weatherApp from "../images/weatherApp.png";
import todo from "../images/todo.gif";
import menu from "../images/menu.gif";
import wordle from "../images/wordle.png";
import weather from "../images/weather.png";
import condo from "../images/condo.png";
import dictionary from "../images/dictionary.png";

export const portfolioData = [
  {
    id: 1,
    image: blog,
    title: "Japan Onsen Tour Guide Blog",
    description: [
      "This project is a personal initiative to redevelop a tour-guide blog that was originally created with a team on Squarespace. I rebuilt it from the ground up using Vite + React, transforming it into a dynamic application with reusable components for easy content updates.",
      "<small>🔸 The project is currently in progress. Some errors might occur on certain pages.</small>"
    ],
    tags: ["Vite + React", "Tilewind CSS", "React Router", "Reusable Components", "Responsive Design"],
    links: [
      { type: "github", url: "https://github.com/elriot/JapanOnsenTour" },
      { type: "live", url: "https://elriot.github.io/JapanOnsenTour/" },
    ],
  },
  {
    id: 2,
    image: ball,
    title: "Merge Ball 3D",
    description: [
      "Merge Ball 3D is a casual puzzle game inspired by the Suika Game, where players merge same-sized balls and stack them strategically to earn points."
    ],
    tags: ["Unity", "C#", "Singleton Pattern", "WebGL", "Puzzle/arcade mechanics", "Physics-based merging", "Responsive UI", "World-space UI modal", "Sound & volume control", "Player Prefabs"],
    links: [
      { type: "github", url: "https://github.com/elriot/Programming-Theory-Repo" },
      { type: "unity", url: "https://play.unity.com/en/games/f7b777cf-1d9e-4e9e-8916-97cf4f5a1ac7/webgl-builds" },
    ],
  },
  {
    id: 3,
    image: lulu,
    title: "Lululemon App",
    description: [
      "A study project inspired by the Lululemon iOS app. Implemented map functionality using MapKit to replicate location-based features."
    ],
    tags: ["Xcode", "SwiftUI", "MapKit", "MVVM", "Customized List View", "Custom Toolbar", "Tab View"],
    links: [
      { type: "github", url: "https://github.com/elriot/Lululemon" },
    ],
  },
  {
    id: 4,
    image: rpg,
    title: "Rpg Portfolio",
    description: [
      "This project is a game-style portfolio inspired by RPG (Role-Playing Game).",
      "You can navigate the character using arrow keys and interact with objects by pressing the Enter or Space Bar keys.",
      "<strong>- Notice -</strong> This app is optimized for PC browsers only."
    ],
    tags: ["React", "Tailwind CSS", "classnames"],
    links: [
      { type: "github", url: "https://github.com/elriot/rpg_portfolio" },
      { type: "live", url: "https://elriot.github.io/rpg_portfolio/" },
      { type: "youtube", url: "https://youtu.be/NttITK7jMik" },
    ],
  },
  {
    id: 5,
    image: panda,
    title: "My Panda App",
    description: [
      "Panda dress-up game inspired by the clothing games I played in childhood.",
      "You can customize from 6 categories, 5 different pandas and 39 items.",
      "Also it provides save your panda as an image file."
    ],
    tags: ["React", "Bootstrap5", "html2canvas", "classnames"],
    links: [
      { type: "github", url: "https://github.com/elriot/panda" },
      { type: "live", url: "https://elriot.github.io/panda/" },
    ],
  },
  {
    id: 6,
    image: weatherApp,
    title: "Weather App (SwiftUI)",
    description: [
      "Simple iOS Weather App feching data from a Weather API",
      "Fetches current wewather, weekly forecast, and location data."
    ],
    tags: ["Xcode", "SwiftUI", "OpenWeather API", "Tab View", "Custom Views"],
    links: [
      { type: "github", url: "https://github.com/elriot/WeatherAppSwift" },
      { type: "youtube", url: "https://youtu.be/Q4u1QcBBjGw" },
    ],
  },
  {
    id: 7,
    image: todo,
    title: "To Do List",
    description: [
      "Simple To Do List App with full CRUD functionality implemented using Firebase.",
      "It offers user registration and login features, and provides three page views: To Do, In Progress, and Done."
    ],
    tags: ["Xcode", "SwiftUI", "Firebase", "Firebase Authentication", "CRUD", "MVVM", "SF Symbols", "Customized List View", "Navigation Stack", "Page View"],
    links: [
      { type: "github", url: "https://github.com/elriot/ToDoList" },
      { type: "youtube", url: "https://youtu.be/KCCrN0AIVbs" },
    ],
  },
  {
    id: 8,
    image: menu,
    title: "Tipping App",
    description: [
      "Order Food, Add Tipping",
      "ios app for Ordering foods and Adding Tip.",
      "Using NavigationStack, the app allows users to navigate back to the previous view and pass data to the connected view."
    ],
    tags: ["Xcode", "SwiftUI", "MVVM", "SF Symbols", "Customized List View", "Navigation Stack"],
    links: [
      { type: "github", url: "https://github.com/elriot/TippingSwiftUI" },
      { type: "youtube", url: "https://youtu.be/B-CeOr7n2yM" },
    ],
  },
  {
    id: 9,
    image: wordle,
    title: "Wordle Game",
    description: [
      "Wordle is a game where you guess the word of the day, which is comprised of 5 letters.",
      "It works seamlessly on both PC browsers and mobile devices."
    ],
    tags: ["React", "Bootstrap5", "react-icons"],
    links: [
      { type: "github", url: "https://github.com/elriot/wordle" },
      { type: "live", url: "https://elriot.github.io/wordle/" },
    ],
  },
  {
    id: 10,
    image: weather,
    title: "Weather App (React)",
    description: [
      "Weather application designed to provide current weather data.",
      "dynamic backgrounds change based on the local weather and time.",
      "There's more information in rainy day."
    ],
    tags: ["React", "Axios", "Tailwind CSS", "react-icons", "classnames", "OpenWeather API"],
    links: [
      { type: "github", url: "https://github.com/elriot/weather" },
      { type: "live", url: "https://elriot.github.io/weather/" },
    ],
  },
  {
    id: 11,
    image: condo,
    title: "Condo Community App",
    description: [
      "My first project after learning React.",
      "Create a community app for condo concierges, owners, and tenants.",
      "I utilized Json-server to enable CRUD (Create, Read, Update, Delete) functionalities."
    ],
    tags: ["React", "Redux ToolKit", "Axios", "Tailwind CSS", "JSON Server", "DB CRUD", "classnames", "React Icon"],
    links: [
      { type: "github", url: "https://github.com/elriot/condo" },
    ],
  },
  {
    id: 12,
    image: dictionary,
    title: "Panda Dictionary",
    description: [
      "Panda Dictionary is web application tailored for managing panda profiles",
      "Users can effortlessly view, add, edit, and delete profiles."
    ],
    tags: ["React", "Nods.js", "MySQL", "Redux ToolKit", "Sequelize", "Axios", "Express"],
    links: [
      { type: "github", url: "https://github.com/elriot/panda_dictionary" },
    ],
  }
];