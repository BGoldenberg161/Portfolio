import React from 'react';
import '../App.css';
import Particles from 'react-tsparticles'

const Home = () => {
  
  return (
    <>
      <div className="homeContainer">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "bubble"
                },
                resize: true
              },
              modes: {
                bubble: {
                  distance: 100,
                  size: 20,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
              }
            },
            particles: {
              move: {
                direction: "bottom",
                enable: true,
                random: true,
                speed: 1,
                straight: false
              },
              number: {
                value: 200
              },
              shape: {
                type: "image",
                stroke: {
                  width: 3
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src:
                    "https://res.cloudinary.com/bgoldenberg161/image/upload/v1603469507/snowflake_dcmibo.png",
                  width: 100,
                  height: 100
                }
              },
              size: {
                random: true,
                value: 5
              }
            },
            detectRetina: true
          }}
        />
        <div className="homeText">
          <p>Hello,</p>
          <p>I'm Branden Goldenberg</p>
          <p>a full-stack developer</p>
        </div>
      </div>
    </>
  );
}

export default Home;
