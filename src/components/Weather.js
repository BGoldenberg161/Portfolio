import React, { useEffect, useState } from 'react';
import '../App.css';
import Particles from 'react-tsparticles'
import axios from 'axios'

const Weather = () => {

  const [weather, setWeather] = useState('snow')
  const [clientCity, setClientCity] = useState('Denver')

  useEffect(()=>{
    axios.get('https://geolocation-db.com/json/')
    .then(res => {
      console.log(res.data?.city)
      setClientCity(res.data.city)
    })
      .then(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=01a36905ba3b4526ab7161941202610&q=${clientCity}`)
        .then(res => {
          console.log(res.data?.current?.condition?.text)
          setWeather(res.data?.current?.condition?.text)
        })
        .catch(err => {
          console.log('There was an error fetching weather data: ', err)
        })
      })
    .catch(err => {
      console.log('There was an error fetching ip address data: ', err)
    })
  }, [])

  const renderWeather = () => {
    if (weather.includes('snow')) { 
            // snow
            return (
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
                        resize: true
                    },
                    modes: {
                        bubble: {
                        distance: 100,
                        size: 30,
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
                        value: 300
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
            />)}
            else if (weather.includes('cloud')){ 
                // clouds
                return (
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
                            resize: true
                            },
                            modes: {
                            bubble: {
                                distance: 100,
                                size: 500,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            }
                        },
                        particles: {
                            move: {
                            direction: "right",
                            enable: true,
                            random: true,
                            speed: .5,
                            straight: false
                            },
                            number: {
                            value: 25
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
                                "https://res.cloudinary.com/bgoldenberg161/image/upload/v1603744746/cloud_a7wlvw.png",
                                width: 600,
                                height: 300
                            }
                            },
                            size: {
                            random: true,
                            value: 400
                            }
                        },
                        detectRetina: true
                    }}
                />)} 
                else if (weather.includes('rain')){ 
                    // rain
                    return (
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
                                resize: true
                                },
                                modes: {
                                bubble: {
                                    distance: 100,
                                    size: 30,
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
                                speed: 5,
                                straight: true
                                },
                                number: {
                                value: 400,
                                random: true
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
                                    "https://res.cloudinary.com/bgoldenberg161/image/upload/v1603745238/raindrop_o0msqt.png",
                                    width: 50,
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
                    />)} 
                    else {
                        // nothing
                        return (
                        <> 
                        </>)}
        }
  
  return (
    // current weather outputs that I have found via the api thus far:
    // Sunny
    // Partly cloudy
    // Light rain
    // Moderate or heavy rain shower
    // Patchy light snow
    // Overcast
    // Mist
    // break down to: rain, cloudy, snow, and other(sun)
    <>
       {renderWeather()} 
    </>
  )
}

export default Weather;
