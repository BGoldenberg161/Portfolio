import React, {useEffect} from 'react';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import M from "materialize-css"


const App = () => {

    useEffect(() => {
        const elems = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(elems, { scrollOffset: 50 });
      })

  return (
    <div className="row">
        <div className="col s12 m9 l10">
            <div id="home" className="section scrollspy">
                <Home />
            </div>

            <div id="projects" className="section scrollspy">
                <Projects />
            </div>

            <div id="about" className="section scrollspy">
                <About />
            </div>
        </div>
        <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </div>
  );
}

export default App;