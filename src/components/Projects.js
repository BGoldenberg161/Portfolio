import React from 'react'
import '../App.css'
import class1 from '../images/class1.png'
import class2 from '../images/class2.png'
import apartmate1 from '../images/apartmate1.png'
import apartmate2 from '../images/apartmate2.png'
import emulsio1 from '../images/emulsio1.png'
import emulsio2 from '../images/emulsio2.png'
import emulsio3 from '../images/emulsio3.png'
import superskierbro1 from '../images/superskierbro1.png'
import superskierbro2 from '../images/superskierbro2.png'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Cool animation effect</h1>
      <img src={class1} alt="image of app" width="200px"></img>
      <img src={class2} alt="image of app" width="200px"></img>
      <p>
        technologies used: 
        Node, Python, Django, Django-rest-framework, jwt-tokens, 
        Javascript, React, Grommet, Postgresql, express
      </p>
      <p>
        A full stack application with both teachers and students 
        in mind, a school system platform created to help streamline 
        a teachers workload, deploying assignments and creating classrooms 
        with ease. The beginging of a true one-stop shop, 
        welcome to Class.
      </p>
      <p>The future of this app?</p>
      <img src={apartmate1} alt="image of app" width="200px"></img>
      <img src={apartmate2} alt="image of app" width="200px"></img>
      <p>
        technologies used:  
        Node, Javascript, React, MaterialUI, MongoDB, passport 
      </p>
      <p>
        Apartmate was built to solve the awkward roommate problems we all run into. 
        Nobody wants to be a "Karen" and lecture their roommates about doing basic 
        chores or splitting simple payments. Apartmate will create a group with you and your roommates 
        and add any chores you and your roommates want done on a week to week basis. 
        Every Sunday at 6PM your chores will be randomly assigned to a different team 
        member and to top it off, you can easily split Venmo payments by inputting 
        the amount and your roomates will get a text with the exact Venmo amount they need to pay you.
      </p>
      <p>The future of this app?</p>
      <img src={emulsio1} alt="image of app" width="200px"></img>
      <img src={emulsio2} alt="image of app" width="200px"></img>
      <img src={emulsio3} alt="image of app" width="200px"></img>
      <p>
        technologies used:  
        Node, Javascript, Materialize, Postgresql, Express, ejs
      </p>
      <p>
        Cooking with dietary restrictions is always a challange. Finding a recipe, 
        figuring out what needs to be removed, how to replace it, etc. Emulsio is 
        an app where the user can search for recipes by cuisine, diet, and type. 
        Or, they can do a natural language search through an text input. The recipes 
        can then be viewed and/or saved in a folder of the user's choosing. This app 
        has been optimized for mobile to ease the use of the app while actually 
        working in the kitchen!
      </p>
      <p>The future of this app?</p>
      <img src={superskierbro1} alt="image of app" width="200px"></img>
      <img src={superskierbro2} alt="image of app" width="200px"></img>
      <p>
        technologies used:  
        Javascript, HTML5, CSS3
      </p>
      <p>
        An old school SuperMario style game where the player can jump on "bad guys" 
        to do damage while gaining experience points to level up. All the artwork was 
        also hand drawn. A truly from scratch mini game!
      </p>
      <p>The future of this app?</p>
    </div>
  );
}

export default Projects;