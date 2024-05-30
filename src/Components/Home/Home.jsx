import React from 'react'
import {delay, motion} from "framer-motion"
import Founder from './Founder'
import Menu from './Menu'


const motionOptions= {
  initial:{
    x:"-100%",
    opacity:1
  }, 
  whileInView:{
    x:0,
    opacity:1,
  }

}

const Home = () => {
  return (
    <>
    <section className='home'>
      <div>
        <motion.h1 {...motionOptions}>
          MBA BURGER WALA
          </motion.h1>

        <motion.p 
        {...motionOptions} 
        transition={{delay:0.2}} 
        >Where every bite is a masterclass in flavor !
        </motion.p>
      </div>
      <motion.a 
      href='#menu'
      initial={{
        y:"-100%",
        opacity:0,
      }}
      whileInView={{
        y:0,
        opacity:1,

      }}
      transition={{
        delay:0.4,
      }}

      >
        Explore Menu
      </motion.a>

    </section>
    <Founder />

    <Menu />
    
    
  </>
  )
}

export default Home