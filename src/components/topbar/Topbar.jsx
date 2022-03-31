import "./topbar.scss"
import { MdEmail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';

export default function Topbar({ menuOpen, setmenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">Festus.</a>
            <div className="itemContainer">
            <MdEmail className="iconMail"/>
            <a className="linkContact" href="mailto:festusbenjamin02@gmail.com">festusbenjamin02@gmail.com</a>
            </div>
            <div className="itemContainer">
            <AiTwotonePhone className="iconCall"/>
            <a className="linkContact" href="tel:+255763104775.com">+255763104775</a>
            </div>
        </div>
        <div className="right">
            <div className="humberger" onClick={() => {setmenuOpen(!menuOpen)}}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>

        </div>
    </div>
  )
}
