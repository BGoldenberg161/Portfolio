import React from 'react'
import '../App.css'
import biking from '../images/biking.jpg'
import camping from '../images/camping.jpg'
import cliff from '../images/cliff.jpg'
import climbing from '../images/climbing.jpg'
import khione from '../images/khione.jpg'
import skiing from '../images/skiing.jpg'

const About = () => {
  return (
    <div className="about">
      <h1>Cool animation effect ie. carousel</h1>
      <img src={biking} alt="biking with friends" width="200px"></img>
      <img src={camping} alt="camping by a lake" width="200px"></img>
      <img src={skiing} alt="my girlfriend and I skiing" width="200px"></img>
      <img src={cliff} alt="cliff send on skis" width="200px"></img>
      <img src={climbing} alt="rock climbing at night" width="200px"></img>
      <img src={khione} alt="my dog Kninoe" width="200px"></img>
      <p>
        I am a full stack developer whose experience as a professional skier 
        has nourished my love of mother nature and taught me how to persevere 
        in the face of adversity. The art of quick decision making in high-risk 
        situations combined with a formal mechanical engineering education 
        provides a unique outlook on problem solving. This perspective helps 
        teams exceed deadline expectations and positively affect the bottom line.
      </p>
    </div>
  )
}

export default About;