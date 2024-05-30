import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>MBA BURGER WALA</h2>
            <p>We're passionate about delivering the best burger experience.</p>
            <br/>
            <em>We give attention to genuine feedback..</em>

            <strong>All right reserved @order.mbaburgerwala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>

            <a href="www.youtube.com/@Sonu.__gupta__">
            <AiFillYoutube />
            </a>
            <a href="https://instagram.com/sonu._gupta_">
            <AiFillInstagram />
            </a>
           <a href="https://github.com/Love9939">
            <AiFillGithub />
             </a>
           </aside>
    </footer>
  )
}

export default Footer