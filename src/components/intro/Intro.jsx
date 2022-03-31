import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";


export default function Intro() {

  const textref = useRef();

  useEffect(() => {
    init(textref.current, 
      { showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Full Stack Developer", "MERN Stack Developer", "Graphics Designer"] })
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Festus Benjamin</h1>
          <h3>A <span ref={textref}></span></h3>
        </div>
      </div>
    </div>
  )
}

