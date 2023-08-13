import React from 'react';
import {Person, Mail} from '@mui/icons-material';

import './topbar.scss';

function Topbar({open, setOpen}) {
  return (
    <div className={'topbar ' + (open && 'active')}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>.thun</a>
                <div className="itemContainer">
                    <Person className='icon'/>
                    <span>+880 1572172359</span>
                </div>
                <div className="itemContainer">
                    <Mail className='icon'/>
                    <span>thun36@gmai.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setOpen(!open)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar