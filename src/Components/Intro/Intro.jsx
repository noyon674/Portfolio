import React from 'react';
import {ArrowDropDown, LinkedIn, GitHub} from '@mui/icons-material';
import { Typewriter } from 'react-simple-typewriter'

import './intro.scss';

function Intro() {

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="Imges/artist-white.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Noyon Sarker</h1>
          <h3>Software <span>
          <Typewriter
            words={['Engineer', 'Designer', 'Developer']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
          </h3>
          <div className="icon">
          </div>
        </div>
        <a href="#portfolio"><ArrowDropDown className='arrow'/></a>
      </div>
    </div>
  )
}

export default Intro