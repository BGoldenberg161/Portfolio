import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import M from "materialize-css"
import axios from 'axios'


const App = () => {

    const [weather, setWeather] = useState('snow')
    const [clientCity, setClientCity] = useState('Denver')

    const setScrollSpy = () => {
        const elems = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(elems, { scrollOffset: 50 });
      }

    useEffect(()=>{

        setScrollSpy()

        axios.get('https://geolocation-db.com/json/')
        .then(res => {
        console.log(res.data?.city)
        setClientCity(res.data.city)
        })
        .then(() => {
            axios.get(`https://api.weatherapi.com/v1/current.json?key=01a36905ba3b4526ab7161941202610&q=${clientCity}`)
            .then(res => {
            console.log(res.data?.current?.condition?.text)
            setWeather(res.data?.current?.condition?.text.toLowerCase())
            })
            .catch(err => {
            console.log('There was an error fetching weather data: ', err)
            })
        })
        .catch(err => {
        console.log('There was an error fetching ip address data: ', err)
        })
    }, [])

  return (
    <div className="main">
        <div className="col s12 m9 l10">
            <div id="home" className="section scrollspy">
                <Home weather={weather}/>
            </div>
            <div id="projects" className="section scrollspy">
                <Projects />
            </div>
            <div id="about" className="section scrollspy">
                <About />
            </div>
        </div>
        <div className="col hide-on-small-only m3 l2" id="sidenav">
            <ul className="section table-of-contents">
                <li><a href="#home" className="deep-purple-text text-lighten-5">Home</a></li>
                <li><a href="#projects" className="deep-purple-text text-lighten-5">Projects</a></li>
                <li><a href="#about" className="deep-purple-text text-lighten-5">About</a></li>
            </ul>
        </div>
    </div>
  );
}

export default App;