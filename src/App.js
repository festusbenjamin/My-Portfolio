import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from 'react';
import Menu from "./components/menu/Menu";
import Projects from "./components/projects/Projects";


function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
        <Topbar menuOpen = {menuOpen} setmenuOpen = {setmenuOpen}/>
        <Menu menuOpen = {menuOpen} setmenuOpen = {setmenuOpen}/>
      <div className="sections">
        <Intro />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
