import './About.css'
import {motion} from 'framer-motion'
import {fadeIn} from '../transition.js'
export default function About(){
    return(
        <>
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.7}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col about-padding">
                            <div className="vertical-center align-center">
                                <h2 className="about-title">
                                    Hey!
                                </h2>
                                <p className="about-desc">Hi! I m Tedy, an IT & Web Developer based in Indonesia. My expertise includes system development, system design, and game development. Experience in developing websites allows me to develop systems quickly.</p>
                                <p className="about-desc">In my free time, I do weight training, play video games, and 3D Design. I m always interested in hearing about new projects, so feel free to contact me.</p>   
                            </div>
                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="col-icon">
                                <a href="https://www.linkedin.com/in/tedyfd/" target="_blank"> 
                                    <img src="/assets/linkedin.svg" alt="" className="icon" width="50" height="50" />
                                </a>
                                <a href="https://github.com/tedyfd" target="_blank">
                                    <img src="/assets/github.svg" alt="" className="icon"width="48" height="48" />
                                </a>
                                <a href="https://www.fiverr.com/tedyfernando" target="_blank">
                                    <img src="/assets/fiverr.svg" alt="" className="icon"width="150" height="150" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            
        </>
    )
}