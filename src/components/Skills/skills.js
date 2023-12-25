import React from 'react';
import './skills.css';
import MySQL from '../../assets/mysql_icon.png';
import Reactjs from '../../assets/react_icon.png';
import javascript from '../../assets/javascript.png';
import Nodejs from '../../assets/nodejs.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What do I do</span>
        <span className="skillDesc">Proficient in front-end technologies including <u><b>MERN Stack</b></u> with a strong command of React.js for dynamic user interfaces. Skilled in responsive design and cross-browser compatibility. Experienced in version control with Git and collaborative development using tools like GitHub.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Reactjs} alt="React" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>React Js</h2>
                    <p>
Skilled React.js developer with expertise in building modular and responsive user interfaces, proficient in state management and API integration for creating high-performance web applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Nodejs} alt="MySQL" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Node Js</h2>
                    <p>Experienced Node.js developer proficient in building scalable server-side applications and RESTful APIs, with a strong focus on real-time functionality and microservices architecture.</p>
                </div>
            </div>  
            <div className="skillBar">
                <img src={MySQL} alt="MySQL" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>MySQL</h2>
                    <p>Seasoned MySQL developer adept at designing and optimizing relational databases for efficient data storage and retrieval.</p>
                </div>
            </div>
                    
            <div className="skillBar">
                <img src={javascript} alt="WebDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Javascript</h2>
                    <p>avaScript enthusiast skilled in modern web development, excelling in ES6+ and proficient in creating dynamic, interactive web applications.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills
