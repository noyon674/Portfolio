import React, { useState } from "react";

import Topbar from "./Components/Topper/Topbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Work from "./Components/work/Work";
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Menu from "./Menu/Menu";

import './app.scss';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar open={menuOpen} setOpen = {setMenuOpen}/> {/* when click 3 line then menu will show and close */}
      <Menu open={menuOpen} setOpen = {setMenuOpen}/>
      
      <div className="container">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
