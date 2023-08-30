import React, { useState } from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';

import './hire.scss';

import {Close} from '@mui/icons-material';

const Hire = ({open, setOpen}) =>{
const[messages, setMessage] = useState({email:'', title:'', location:'', details:''});
const {email, title, location, details} = messages;

const handleChange = (e)=>{
  setMessage({...messages, [e.target.name]: e.target.value});
};

const handleSubmit = (e)=>{
  console.log(messages);
  e.preventDefault();
}
  return (
    <div className={open ? 'Hire': 'close'}>
        <div onClick={()=>{setOpen(!open)}} className="Close">
            <Close className='cross'/>
        </div>
        <div className="content">
          <h2>Hire Me!</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter email' name='email'
             value={email} onChange={handleChange} required/><br />

            <input type="text" placeholder='Job title' name='title'
            value={title} onChange={handleChange} required /><br />

            <input type="text" placeholder='Location' name='location'
            value={location} onChange={handleChange} required /><br />

            <textarea placeholder='Write details' name='details'
            value={details} onChange={handleChange} required ></textarea><br />

            <button type='submit' onClick={()=>setOpen(!open)} className='hireBtn'>Hire me</button>
          </form>
        </div>
    </div>
  );
};

export default Hire;