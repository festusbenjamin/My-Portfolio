import { useState } from "react";
import "./contact.scss";
import { BsFillArrowUpCircleFill } from "react-icons/bs"


export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
    <div className="left">
      <img src="assets/handshake.png" alt="" />
    </div>
    <div className="right">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type = "email" placeholder="Email"/>
        <textarea placeholder="Message"/>
        <button type="submit">Send</button>
        {message && <p>Thankyou</p>}
      </form>
      <a href="#intro"><BsFillArrowUpCircleFill className="up"/></a>
    </div>
    </div>
  )
}
