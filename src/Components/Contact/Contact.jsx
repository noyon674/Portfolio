import React, { useState } from 'react'
import './contact.scss';

const Contact = () => {

  const [messages, setMessages] = useState({name:'', email:'', subject:'', message:''});
  const {name, email, subject, message} = messages;

  const handleChange = (e)=>{
    setMessages({...messages, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e)=>{
    console.log(messages);
    e.preventDefault();
    
  };
  return (
    <div className='contact' id='contact'>
      <div className="wrapper">
        <div className="top"><h2>Contact Info</h2></div>
        <div className="bottom">
          <div className="left">
            <h2>Let's talk about <br />everything!</h2>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Eaque, temporibus.</p>
            <img src="Imges/undraw-contact.svg" alt="" />
          </div>
          <div className="right">
            <div className="form">
              <form action="" onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='Your Name'
                name='name'
                value={name}
                onChange={handleChange}
                required /> <br />

                <input 
                type="email"
                placeholder='Email'
                name='email'
                value={email}
                onChange={handleChange}
                required /> <br />

                <input 
                type="text"
                placeholder='Subject'
                name='subject'
                value={subject}
                onChange={handleChange}
                required /> <br />

                <textarea 
                name="message"
                placeholder='Write your message'
                value={message}
                onChange={handleChange}
                required ></textarea> <br />

                <button type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;