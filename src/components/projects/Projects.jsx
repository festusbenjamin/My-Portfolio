import { useState, useEffect } from "react";
import ProjectsList from "../projectsList/ProjectsList";
import "./projects.scss";
import { featuredProjects, 
  webProjects, 
  mobileProjects, 
  systemProjects, 
  graphicsProjects } from '../../data';

export default function Projects() {
  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web Apps"
    },
    {
      id: "mobile",
      title: "Mobile Apps"
    },
    {
      id: "system",
      title: "Systems"
    },
    {
      id: "graphics",
      title: "Graphics Design"
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredProjects);
        break;
        case "web":
        setData(webProjects);
        break;
        case "mobile":
        setData(mobileProjects);
        break;
        case "system":
        setData(systemProjects);
        break;
        case "graphics":
        setData(graphicsProjects);
        break;
    
      default:
        break;
    }
  
  }, [selected]);

  return (
    <div className="projects" id="projects">
    <h1>Projects</h1>
    <ul>
     {list.map(item => ( 
       <ProjectsList
       title = {item.title} 
       active = {selected === item.id}
       id = {item.id} 
       setSelected = {setSelected}/>
       ))}
    </ul>
    <div className="container">
    {data.map(d => (
      <div className="item">
        <img src={d.img} alt="" />
        <h3>{d.title}</h3>
      </div>
    ))}
      
    </div>
    <a href="assets/FESTUS CV.pdf">Download my resume here</a>
    </div>
  )
}
