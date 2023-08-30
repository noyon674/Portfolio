import React from 'react'
import {Check, CheckBox, CheckCircle} from '@mui/icons-material';

import './experience.scss';

const Experience = () => {
  return (
    <div className="experience" id='experience'>
        <div className='wrapper'>
            <div className="top">
                <h2>Experience</h2>
            </div>
            <div className="bottom">
                <div className="left">
                    <h4>Frontend Development</h4>
                    <div className="skill">
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>HTML</h5>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>CSS</h5>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>JavaScript</h5>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>React JS</h5>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>TypeScript</h5>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>Next JS</h5>
                                <p>Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h4>Backend Development</h4>
                    <div className="skill">
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>MongoDB</h5>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>Node JS</h5>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>Express JS</h5>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>Nest JS</h5>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>REST APIs</h5>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div className="item">
                            <span><CheckCircle /></span>
                            <div className="text">
                                <h5>Git</h5>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience