import React from 'react';
import './freelance.css';
import campus from '../../assets/campus.png';
import Tic_Tac_Toe from '../../assets/Tic_Tac_Toe.png';
import Placement_cell from '../../assets/Placement-cell.png';
import Todo_list from '../../assets/Todo_list.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';


function Works() {
  return (
    <section id='clients'>
      <h2 className="workstitle">Clients</h2> 
      <span className="worksDesc">As a Client-based Project in React and web developer, I specialize in creating dynamic, user-centric interfaces and responsive websites. With a keen eye for design and a commitment to delivering high-quality solutions.</span>    
      <div className="worksImgs">

        <a href="https://shreyapandekar.github.io/College_campus/" target="_blank" rel="noopener noreferrer" className=''>
          <img src={campus} alt="Portfolio1" className="worksImg" />
        </a>
      </div>
      <button className="workBtn">See more</button>
    </section>
  )
}

export default Works
