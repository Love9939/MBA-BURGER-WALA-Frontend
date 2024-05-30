import React from 'react'
import { motion } from 'framer-motion';
import me from "../../assets/me.webp"
const options = {
    initial:{
        x:"-100%",
        opacity:0,

    },
    whileInView:{
        x:0,
        opacity:1,

    }
}

const Founder = () => {
  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt='Hy' /> 
            <h3>Lovelesh Kumar</h3> 
            <p>Greetings, all ! I'm Lovelesh Kumar, the creative 
                force driving MBA Burger Wala. <br />
                Our ultimate goal? To concoct the most irresistibly
                 mouthwatering burger ever to grace taste buds.
            </p>
        </motion.div>

    </section>
  )
}

export default Founder ;