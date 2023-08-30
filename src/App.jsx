import React, { useState } from "react";

import Topbar from "./Components/Topper/Topbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Experience from "./Components/Experience/Experience";
import Contact from './Components/Contact/Contact';
import Menu from "./Menu/Menu";

import './app.scss';
import Hire from "./Components/Hire/Hire";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const[hire, setHire] = useState(false);

  return (
    <div className="app">
      <Topbar open={menuOpen} setOpen = {setMenuOpen}/> {/* when click 3 line then menu will show and close */}
      <Menu open={menuOpen} setOpen = {setMenuOpen} hire = {hire} setHire = {setHire}/>
      <Hire open = {hire} setOpen = {setHire}/>
      
      <div className="container">
        <Intro />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
