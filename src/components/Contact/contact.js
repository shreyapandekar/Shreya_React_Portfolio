import React,{useRef} from 'react';
import './contact.css';
// import TwitterIcon from '../../assets/twitter.png'
// import InstagramIcon from '../../asserts/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) =>
  {
    e.preventDefault();

    emailjs.sendForm('service_ve85b7k', 'template_wfilq9n', form.current, 'LJnNa9L-mW_sI2vx8')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Send!');
      }, (error) => 
      {
          console.log(error.text);
      });
  };
  return (
    <div>
      <section id="contactPage">
        <div id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Yours Name' name='youe_name' />
                <input type="email" className='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value= 'send' className='submitBtn'>Submit</button>
                {/* <div className='link'>
                    <img src={TwitterIcon} alt="Twitter" className='link' />
                    <img src={InstagramIcon} alt="Instagram" className='link' />
                    <img src={} alt="" className='link' />
                    <img src={} alt="" className='link' />
                </div> */}
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
