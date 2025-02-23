import React, {useEffect} from 'react'
import '../App.css'
import M from "materialize-css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import classImg from '../images/Class.png'
import apartmate from '../images/Apartmate.png'
import emulsio from '../images/Emulsio_smoll.png'
import superskierbro from '../images/SuperSkierBro.png'

const Projects = () => {

  useEffect(() => {
    const elems = document.querySelectorAll('.parallax')
    const instances = M.Parallax.init(elems);
  }, [])

  return (
    <div className="projects">
      <h1 className="header">Projects</h1>
      <div className="projectDetails">
        <h2>Class</h2>
        <p>
          A full stack application with both teachers and students 
          in mind, a school system platform created to help streamline 
          a teachers workload, deploying assignments and creating classrooms 
          with ease. The beginging of a true one-stop shop, 
          welcome to Class.
        </p>
        <div className="techs" >
          <h3>Technologies used:</h3>
          <img src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=Python"></img>
          <img src="https://img.shields.io/badge/-Django-darkgreen?style=flat-square&logo=django"></img>
          <img src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"></img>
          <img src="https://img.shields.io/badge/-ReactJS-black?style=flat-square&logo=react"></img>
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"></img>
          <img src="https://img.shields.io/badge/-Express-black"></img>
          <img src="https://img.shields.io/badge/-Grommet-grey"></img>
          <img src="https://img.shields.io/badge/-django--rest--framework-blueviolet"></img>
          <img src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js"></img>
        </div>
        <div className="linkButtons">
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://classtheapp.herokuapp.com/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            <p className="buttonText white-text">Live</p>
          </div>
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://github.com/BGoldenberg161/class_frontend" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
            <p className="buttonText white-text">Code</p>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={classImg} alt="class" width="50%"></img>
        </div>
      </div>
      <div className="projectDetails">
        <h2>ApartMate</h2>
        <p>
          Apartmate was built to solve the awkward roommate problems we all run into. 
          Nobody wants to be a "Karen" and lecture their roommates about doing basic 
          chores or splitting simple payments. Apartmate will create a group with you and your roommates 
          and add any chores you and your roommates want done on a week to week basis. 
          Every Sunday at 6PM your chores will be randomly assigned to a different team 
          member and to top it off, you can easily split Venmo payments by inputting 
          the amount and your roomates will get a text with the exact Venmo amount they need to pay you.
        </p>
        <div className="techs" >
          <h3>Technologies used:</h3>
          <img src="https://img.shields.io/badge/-ReactJS-black?style=flat-square&logo=react"></img>
          <img src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"></img>
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"></img>
          <img src="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb"></img>
          <img src="https://img.shields.io/badge/-Material_UI-0081CB?style=flat-square&logo=material-ui"></img>
          <img src="https://img.shields.io/badge/-Express-black?style=flat-square&logo=express"></img>
          <img src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js"></img>
        </div>
        <div className="linkButtons">
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://apartmate-client.herokuapp.com/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            <p className="buttonText white-text">Live</p>
          </div>
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://github.com/BGoldenberg161/ApartMate-Frontend" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
            <p className="buttonText white-text">Code</p>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={apartmate} alt="apartmate" width="50%"></img>
        </div>
      </div>
      <div className="projectDetails">
        <h2>Emulsio</h2>
        <p>
          Cooking with dietary restrictions is always a challange. Finding a recipe, 
          figuring out what needs to be removed, how to replace it, etc. Emulsio is 
          an app where the user can search for recipes by cuisine, diet, and type. 
          Or, they can do a natural language search through an text input. The recipes 
          can then be viewed and/or saved in a folder of the user's choosing. This app 
          has been optimized for mobile to ease the use of the app while actually 
          working in the kitchen!
        </p>
        <div className="techs" >
          <h3>Technologies used:</h3>
          <img src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"></img>
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"></img>
          <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3"></img>
          <img src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql"></img>
          <img src="https://img.shields.io/badge/-Express-black?style=flat-square&logo=express"></img>
          <img src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js"></img>
        </div>
        <div className="linkButtons">
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://emulsio.herokuapp.com/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            <p className="buttonText white-text">Live</p>
          </div>
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://github.com/BGoldenberg161/Emulsio" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
            <p className="buttonText white-text">Code</p>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={emulsio} alt="emulsio" width="100%"></img>
        </div>
      </div>
      <div className="projectDetails">
        <h2>SuperSkierBro</h2>
        <p>
          An old school SuperMario style game where the player can jump on "bad guys" 
          to do damage while gaining experience points to level up. All the artwork was 
          also hand drawn. A truly from scratch mini game!
        </p>
        <div className="techs" >
        <h3>Technologies used:</h3>
        <img src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"></img>
        <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"></img>
        <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3"></img>
        </div>
        <div className="linkButtons">
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://bgoldenberg161.github.io/SuperSkierBro/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            <p className="buttonText white-text">Live</p>
          </div>
          <div className="buttonContainer">
            <a className="btn-floating btn-med waves-effect waves-light deep-purple accent-2" href="https://github.com/BGoldenberg161/SuperSkierBro" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
            <p className="buttonText white-text">Code</p>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={superskierbro} alt="superskierbro" width="50%"></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;