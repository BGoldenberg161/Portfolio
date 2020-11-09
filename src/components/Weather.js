import React from 'react';
import '../App.css';
import Particles from 'react-tsparticles'

const Weather = (props) => {
    
  const renderWeather = () => {
    if (props.weather.includes('snow')) { 
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
                        value: 8
                    }
                    },
                    detectRetina: true
                }}
            />)}
            else if (props.weather.includes('cloud') || props.weather.includes('overcast')){ 
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
                else if (props.weather.includes('rain')){ 
                    // rain
                    https://images.unsplash.com/photo-1601974873496-1a65ed723542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80
                    return (
                    <Particles
                        // style={{backgroundImage: `${rainBackground}`}}
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
    // Clear
    // break down to: rain, cloudy, snow, and other(sun)
    <>
       {renderWeather()} 
    </>
  )
}

export default Weather;
