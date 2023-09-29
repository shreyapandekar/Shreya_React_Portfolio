import React from 'react';
import './intro.css';
import bg from '../../assets/shreyapandekar.png';
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introtext">I'm <span className="introName">Shreya</span> <br/> Full Stack Developer </span>
            <p className="introPara">I am a skilled MERN stack developer with experience in creating React websites.</p>
            <Link><button className='btn'><img src={btnImg}alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
