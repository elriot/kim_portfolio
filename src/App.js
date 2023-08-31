import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import HeaderMenu from './components/HeaderMenu';
import { Portfolio } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

function App() {

    return (<div className="App">
        <Router>
            <HeaderMenu/>
            <Routes>
                <Route path="/" element={<MainPage />} />                       
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolios" element={<Portfolio />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    </div>
    );
}

export default App;
