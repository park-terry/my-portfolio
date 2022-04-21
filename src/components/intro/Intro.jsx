import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef();
  
  useEffect(()=> {
    init(textRef.current, { 
      showCursor: false, 
      strings: ["Software Development", "Embedded Programming"],
    })
  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Terry Park</h1>
          <h3>Electrical Engineering Undergraduate Student</h3>
          <h4>
            Interested in <span ref={textRef}></span>
          </h4>
        </div>
        <a href="#education">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
