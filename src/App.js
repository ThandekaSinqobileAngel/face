import React, { Component } from "react"; 
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import './App.css';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";

const app = new Clarifai.App({
    apiKey: 'da7cc8e76cce499a81c38eeddbe23c0e'
})

class App extends Component {
    constructor() {
        super();
        this.state = {
            input:'',
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onButtonSubmit = () => {
        console.log('click');
        app.models.predict('face-detection-workflow-nvutnu',
        // URL
        "https://samples.clarifai.com/metro-north.jpg"
        ).then
        (function(response) {
                // do something with responseconsole.log(response);
                },
            function(err) {
                // there was an error}
            }
        );
    }
    

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
            <Rank/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition/> 
            <Particles className="particles"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
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
            /> 
        </div>
    );
    }
}

export default App;
