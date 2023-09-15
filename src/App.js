import React, { Component } from "react"; 
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import './App.css';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";

class App extends Component {
  render() {
    const particlesInit = async (main) => { 
      console.log(main); 
      await loadFull(main); 
    }; 
    const particlesLoaded = (container) => { 
      console.log(container); 
    }; 
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        {/* <ImageLinkForm/>
        <FaceRecognition/> */}
        {/* <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                  background: {
                      color: {
                          value: "9ABDDC",
                      },
                  },
                  fpsLimit: 120,
                  interactivity: {
                      events: {
                          onClick: {
                              enable: true,
                              mode: "push",
                          },
                          onHover: {
                              enable: true,
                              mode: "repulse",
                          },
                          resize: true,
                      },
                      modes: {
                          push: {
                              quantity: 4,
                          },
                          repulse: {
                              distance: 200,
                              duration: 0.4,
                          },
                      },
                  },
                  particles: {
                      color: {
                          value: "#ffffff",
                      },
                      links: {
                          color: "#ffffff",
                          distance: 150,
                          enable: true,
                          opacity: 0.5,
                          width: 1,
                      },
                      move: {
                          direction: "none",
                          enable: true,
                          outModes: {
                              default: "bounce",
                          },
                          random: false,
                          speed: 6,
                          straight: false,
                      },
                      number: {
                          density: {
                              enable: true,
                              area: 800,
                          },
                          value: 80,
                      },
                      opacity: {
                          value: 0.5,
                      },
                      shape: {
                          type: "circle",
                      },
                      size: {
                          value: { min: 1, max: 5 },
                      },
                  },
                  detectRetina: true,
              }}
          />   */}
    </div>
  );
  }
}

export default App;
