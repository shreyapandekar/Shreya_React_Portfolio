import React from 'react';
import './works.css';
// import Portfolio1 from '../../assets/portfolio-1.png';
// import Portfolio2 from '../../assets/portfolio-2.png';
// import Portfolio3 from '../../assets/portfolio-3.png';
// import Portfolio4 from '../../assets/portfolio-4.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';


function Works() {
  return (
    <section id='works'>
      <h2 className="workstitle">My Portfolio</h2> 
      <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas necessitatibus est blanditiis facere et eveniet, ut, rerum adipisci porro deserunt. Quidem necessitatibus quam veritatis esse harum aliquid repudiandae exercitationem reiciendis, corporis dignissimos eveniet earum molestiae rerum, adipisci laudantium optio minima temporibus! Sit quas facere ipsa! Iure quod officiis possimus nesciunt voluptatum fugiat dolore architecto iste! Soluta, quo laborum! Ducimus officia libero quod soluta labore deleniti laborum aut odio eum minima dolorum exercitationem aliquid, earum, ex suscipit facere? Asperiores eveniet quod, facilis animi ab error ut pariatur unde quaerat! Minus obcaecati minima non quisquam doloribus tenetur nemo explicabo. Cupiditate, deleniti?</span>    
      <div className="worksImgs">
        {/* <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
        <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
        <img src={Portfolio6} alt="Portfolio6" className="worksImg" /> */}
      </div>
      <button className="workBtn">See more</button>
    </section>
  )
}

export default Works
