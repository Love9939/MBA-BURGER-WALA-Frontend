import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='contact'>
        <motion.form>
            <h2>Contact Us </h2>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea placeholder='Message...' cols={30} rows={10} ></textarea>
            <button type='submit'>Send</button>


        </motion.form>

    </section>
  )
}

export default Contact;