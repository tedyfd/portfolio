import './Projects.css'
import {motion} from 'framer-motion'
import {fadeIn} from '../transition.js'

export default function Project(){
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
                        <div className="col">
                            <div className="vertical-center align-left tag">
                                <h1 className="project-title">
                                    Develop Business System
                                </h1>
                                <p className="project-desc">
                                Assist business owners with reporting and recording their business activities, ensuring accurate documentation and compliance. My services include generating insightful reports, and implementing efficient systems for better decision-making.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="middle">
                                <img src="/assets/business-porto.png" alt="" className='project-img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.7}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="middle">
                                <img src="/assets/game-porto.png" alt="" className='project-img'/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="vertical-center align-right">
                                <h1 className="project-title">
                                    Game Development
                                </h1>
                                <p className="project-desc">
                                I create games in my free time. My project is developed using Unreal Engine, and all assets are made by me. This game will be released on Steam. Stay tuned!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}