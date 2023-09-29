import React from 'react';
import './skills.css';
import MySQL from '../../assets/mysql_icon.png';
import Reactjs from '../../assets/react_icon.png';
import WebDesign from '../../assets/website-design.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What do I do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum iusto veritatis numquam recusandae dolore nesciunt non aperiam exercitationem sequi?</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={MySQL} alt="MySQL" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>MySQL</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nisi?</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Reactjs} alt="React" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>React</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, assumenda.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>webDesign</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptas.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills
