import React from 'react'
import {LinkedIn, GitHub, Instagram} from '@mui/icons-material';

import './menu.scss';

const Menu = ({open, setOpen, hire, setHire}) => {

  return (

    <div className={'menu ' + (open && 'active')}>
        <ul>
            <li onClick={()=>{setOpen(false)}}><a href="#intro">Home</a></li>
            <li onClick={()=>{setOpen(false)}}><a href="#portfolio">Portfolio</a></li>
            <li onClick={()=>{setOpen(false)}}><a href="#experience">Experience</a></li>
            <li onClick={()=>{setOpen(false)}}><a href="#contact">Contact</a></li>
            <li className='hire' onClick={()=>{setOpen(false)}}><a onClick={()=>setHire(true)} href="#Hire">Hire Me!</a></li>
            <li className='icon'> 
            <a href="https://www.linkedin.com/in/noyon674/" target='_'><LinkedIn /></a> 
            <a href="https://github.com/noyon674" target='_'><GitHub /></a>
            <a href="https://www.instagram.com/_prethun_/" target='_'><Instagram /></a></li>
        </ul>

    </div>
  );
};

export default Menu