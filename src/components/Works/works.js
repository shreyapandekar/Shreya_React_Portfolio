import React from 'react';
import './works.css';
import campus from '../../assets/campus.png';
import Tic_Tac_Toe from '../../assets/Tic_Tac_Toe.png';
import Placement_cell from '../../assets/Placement-cell.png';
import Todo_list from '../../assets/Todo_list.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';


function Works() {
  return (
    <section id='works'>
      <h2 className="workstitle">My Portfolio</h2> 
      <span className="worksDesc">Aspiring Web Developer with hands-on experience in creating responsive and user-friendly websites using HTML, CSS, JavaScript, React Js and Beginner-level BackEnd </span>    
      <div className="worksImgs">

        <a href="https://shreyapandekar.github.io/College_campus/" target="_blank" rel="noopener noreferrer" className=''>
          <img src={campus} alt="Portfolio1" className="worksImg" />
        </a>

        <a href="https://shreyapandekar.github.io/TicTacToe_using_React/" target="_blank" rel="noopener noreferrer" className=''>
          <img src={Tic_Tac_Toe} alt="Portfolio2" className="worksImg" />
        </a>
        <a href="https://mescoe-placementcell.onrender.com/" target="_blank" rel="noopener noreferrer" className=''>
          <img src={Placement_cell} alt="Portfolio3" className="worksImg" />
        </a>
        <a href="https://mescoe-placementcell.onrender.com/" target="_blank" rel="noopener noreferrer" className=''>
        <img src={Todo_list} alt="Portfolio4" className="worksImg" />
        </a>
        
        
        
        
        {/* <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
        <img src={Portfolio6} alt="Portfolio6" className="worksImg" /> */}
      </div>
      <button className="workBtn">See more</button>
    </section>
  )
}

export default Works
