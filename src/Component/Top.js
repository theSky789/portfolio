import '../App.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import Typewriter from "react-ts-typewriter";



import React from 'react'

function Top() {
  return (
    <>
    <div  className='bar'>
      <img src="https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="lady"/>
      <div className='bar-title'>Akash Gupta</div>
      <ul className='nav-items'>
        <li>Home</li>
        <li>About Me</li>
        <li>What I Do</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Testimonial</li>
        <li>Contact</li>
      </ul>
      <div class="nav-icon">
        <FaFacebook className="icon"/>
        <FaLinkedinIn className="icon"/>
        <FaGithub className="icon"/>
        <FaVolleyballBall className="icon"/>
        </div>
    </div>
   
    <div className='hireme'>
      
        <div className='hire-mid hire-one'>Welcome</div>
        <div className='hire-mid hire-two'>
          <Typewriter 
         text={"I'm a Full-Stack Developer"} speed={100} loop={true} /></div>
        <div className='hire-mid hire-three'>based in UK, INDIA.</div>
        <button className='hiremebtn'>Hire Me</button>

    </div>
    </>
  )
}

export default Top