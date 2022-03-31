import "./projectsList.scss"

export default function ProjectsList({id,title,active,setSelected}) {
  return (
    <li className={active ? "projectsList active" : "projectsList"} 
    onClick = {() => setSelected(id)}>
    {title}
    </li>
  )
}
