import React, { useEffect } from 'react'
import '../App.css'
import M from "materialize-css"
import biking from '../images/biking.jpg'
import camping from '../images/camping.jpg'
import cliff from '../images/cliff.jpg'
import climbing from '../images/climbing.jpg'
import khione from '../images/khione.jpg'
import skiing from '../images/skiing.jpg'

const About = () => {

  useEffect(() => {
    const elem = document.querySelector('.carousel')
    const instance = M.Carousel.init(elem, {
      indicators: true,
      numVisible: 3, 
      duration: 1000
    })
    const interval = setInterval(() => {
      instance.next()
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="about">
      <div className="carousel">
        <a className="carousel-item" ><img src={biking} alt="biking with friends" height="200px"></img></a>
        <a className="carousel-item" ><img src={camping} alt="camping by a lake" height="200px"></img></a>
        <a className="carousel-item" ><img src={skiing} alt="my girlfriend and I skiing" height="200px"></img></a>
        <a className="carousel-item" ><img src={cliff} alt="cliff send on skis" height="200px"></img></a>
        <a className="carousel-item" ><img src={climbing} alt="rock climbing at night" height="200px"></img></a>
        <a className="carousel-item" ><img src={khione} alt="my dog Kninoe" height="200px"></img></a>
      </div>
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