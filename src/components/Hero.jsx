import {motion} from 'framer-motion'
import {fadeIn} from '../transition.js'
export default function Hero(){
    return(
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true,amount:0.7}}
        >
            <div className="full-container">
                <div className="title-page">
                    <div className='sub-title'>
                        Tedy Fernando  
                    </div>
                    <div className='title'>
                        <div className='title-work'></div>
                        Developer
                    </div>
                </div>
            </div>
        </motion.div>
    )
}