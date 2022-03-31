import "./menu.scss"

export default function Menu({ menuOpen, setmenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul onClick={() => {setmenuOpen(!menuOpen)}}>
            <li>
                <a href='#intro'>Home</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#skills'>Skills</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
