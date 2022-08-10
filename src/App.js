import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import './js/script';
import './css/styles.css'
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";

function App() {
  return (
        <div className="page">
            <Header/>
            <main>
                <Banner/>
                <About/>
                <Project/>
                <Skill/>
                <Contact/>
            </main>
            <Footer/>
        </div>
  );
}

export default App;
