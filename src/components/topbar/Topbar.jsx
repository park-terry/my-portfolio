import "./topbar.scss"
import { GitHub, LinkedIn, MailOutline } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a  href="#intro" className="logo">terry.</a>
          <div className="itemContainer">
            <MailOutline className="icon" />
            <span>sdparkfive@gmail.com</span>
          </div>
          <a href="https://www.linkedin.com/in/park-terry" target="_blank" className="itemContainer">
            <LinkedIn className="icon" />
          </a>
          <a href="https://github.com/park-terry" target="_blank" className="itemContainer">
            <GitHub className="icon" />
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div> 
    </div>
  )
}
