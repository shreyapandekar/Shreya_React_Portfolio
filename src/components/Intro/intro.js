import React from 'react';
import './intro.css';
import bg from '../../assets/shreyapandekar.png';
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';






const textvariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
}

const slidervariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    },
  },
}
const Intro = () => {
  return (
    <section id="intro"  >
        <motion.div className="introContent" variants={textvariants} initial="initial" animate="animate">
            <motion.span className="hello" variants={textvariants}>Hello</motion.span>
            <motion.span className="introtext" variants={textvariants}>I'm <span className="introName">Shreya</span> <br/> Full Stack Developer </motion.span>
            <motion.p className="introPara" variants={textvariants}>I am a skilled MERN stack developer with experience in creating React websites.</motion.p>
            <Link><button className='btn' ><img src={btnImg}alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </motion.div>
        <motion.div className="slidingcontainer" variants={slidervariants} inital="initial" animate="animate">
          React Developer 
        </motion.div>
        <img src={bg}  alt="Profile" className="bg" />
        
    </section>
  )
}

export default Intro;
