import React, {useEffect} from 'react'
import '../App.css'
import Weather from './Weather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkiing } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import rainBackground from '../images/rainBackground.jpg'
import snowBackground from '../images/snowBackground.jpg'
import cloudBackground from '../images/cloudBackground.jpg'
import stdBackground from '../images/stdBackground.jpg'



const Home = (props) => {

  const checkWeather = () => {
    let image = stdBackground
    if (props.weather.includes('rain') || props.weather.includes('mist')){
      image = rainBackground
    } else if (props.weather.includes('snow')){
      image = snowBackground
    } else if (props.weather.includes('cloud') || props.weather.includes('overcast')){
      image = cloudBackground
    }
    return image
  }

  return (
    <>
      <div className="homeContainer" style={{backgroundImage: `url(${checkWeather()})`}}>
        <Weather weather={props.weather}/>
        <div className="homeText">
          <p>Hello,</p>
          <p>I'm Branden Goldenberg</p>
          <p>a <span className="highlight">full-stack</span> developer</p>
          <div className="homeButtons">
            <div className="buttonContainer">
              <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://drive.google.com/file/d/17rs9rRbS0WdQzXekSz9X913xHimVNaQQ/view?usp=sharing" target="blank"><FontAwesomeIcon icon={faSkiing} /></a>
              <p className="buttonText white-text">Resume</p>
            </div>
            <div className="buttonContainer">
              <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://www.linkedin.com/in/bgoldenberg161/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <p className="buttonText white-text">LinkedIn</p>
            </div>
            <div className="buttonContainer">
              <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://github.com/BGoldenberg161" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
              <p className="buttonText white-text">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
