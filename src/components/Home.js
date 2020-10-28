import React from 'react'
import '../App.css'
import Weather from './Weather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  
  return (
    <>
      <div className="homeContainer">
        <Weather />
        <div className="homeText">
          <p>Hello,</p>
          <p>I'm Branden Goldenberg</p>
          <p>a full-stack developer</p>
          <div className="homeButtons">
            <div className="buttonContainer">
              <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://drive.google.com/file/d/17rs9rRbS0WdQzXekSz9X913xHimVNaQQ/view?usp=sharing" target="blank"><i className="material-icons">library_books</i></a>
              <p className="buttonText">Resume</p>
            </div>
            <div className="buttonContainer">
              <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://www.linkedin.com/in/bgoldenberg161/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <p className="buttonText">LinkedIn</p>
            </div>
            <div className="buttonContainer">
              <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://github.com/BGoldenberg161" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
              <p className="buttonText">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
