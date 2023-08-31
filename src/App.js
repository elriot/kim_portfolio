import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";

function App() {

    return (<div className="App">
        Hello
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    </div>
    );
}

export default App;
