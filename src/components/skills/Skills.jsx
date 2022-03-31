import "./skills.scss";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState } from "react";

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Front End",
      name: "React & React Native",
      image1: "assets/react.svg",
      image2: "assets/react-native.svg",
      description: "",
    },
    {
      id: "2",
      title: "Back End",
      name: "Nodejs & PHP",
      image1: "assets/nodejs.svg",
      image2: "assets/php.svg",
      description: "",
    },
    {
      id: "3",
      title: "Styling",
      name: "CSS & SASS",
      image1: "assets/css.svg",
      image2: "assets/sass.svg",
      description: "",
    },
    {
      id: "4",
      title: "DataBase",
      name: "MYSQL & MongoDB",
      image1: "assets/mysql.svg",
      image2: "assets/mongodb.svg",
      description: "",
    },
    {
      id: "5",
      title: "Design",
      name: "Graphics Design",
      image1: "assets/adobe-photoshop.svg",
      image2: "assets/adobe-illustrator.svg",
      description: "",
    },
  ]

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4) : 
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="skills" id="skills">
    <h1>Skills</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
              <u><h3>{d.title}:</h3></u>
              <h4>{d.name}</h4>
              <p>{d.description}</p>
              </div>
            </div>
            <div className="right">
              <div className="imgContainer">
                <img src={d.image1} alt="" />
              </div>
              <div className="imgContainer">
                <img src={d.image2} alt="" />
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
      <BsChevronLeft className="arrow left"  onClick={() => handleClick("left")}/>
      <BsChevronRight className="arrow right" onClick={() => handleClick("right")}/>
    </div>
  )
}

