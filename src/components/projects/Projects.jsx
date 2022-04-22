import "./projects.scss"
import { useState } from "react";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const data = [
    {
      id: "1",
      title: "Wearable EEG Device",
      desc: "Capstone project: Team of 4 worked together to meet the client's need for a low-noise EEG device that can be used in a research of concussionsin contact sports. I worked as a firmware designer to include accelerometer functionality and to create a wrapper library to improve usability to change any settings. I also wrote a MATLAB code that could be used for validation of the device.",
      tech:"C++, MATLAB, Circuit Design/Analysis",
      proj:"https://www.youtube.com/watch?v=rZG6mpmFFN8&list=PLjFm8PBGO0F8R7bRY151yyy9ZPIW3Z2_F&index=6",
      img: "./assets/capstone.png",
    },
    {
      id: "2",
      title: "Amazoom",
      desc: "Team of 4 worked together to build virtual Amazoom with its warehouse and user interface. I built Virtual robots that are used to move objects around the warehouse. The robots included object recognition, automated navigation, andcollision avoidance capabilities.",
      tech:"C#",
      proj:"See Source Code",
      img: "./assets/amazoom.png",
    },
    {
      id: "3",
      title: "Virtual Quality Control Robot",
      desc: "Team of 3 worked together to build a a 3.5 DOF virtual quality control robot. I designed a driver circuit using H-bridge to control different motors operating as joints. The robot included control system to move the arm to pre-assigned location using Simulink. A virtual simulation model was developed using Simulation X",
      tech:"Circuit Design/Analysis, C++, MATLAB, Simulink, SimulationX",
      proj:"https://youtu.be/P5L1cHoaK5U",
      img: "./assets/QCRobot.png",
    },
  ];

  const handleClick = (way) => {
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
    : setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
  }; 

  const {ref, inView} = useInView({
    threshold: 0.2
  });

  const animation = useAnimation();

  useEffect(()=> {
    console.log("use effect hook, inView = ", inView);
    if(inView) {
      animation.start({
        opacity: 1,
        duration: 2
      });
    }
    if(!inView) {
      animation.start({
        opacity: 0
      })
    }
  }, [inView]);

  return (
    <div className="projects" id="projects">
      <motion.h1 className="projects-title"
        animate={animation}>
        Projects
      </motion.h1>
      <div
        ref={ref}
        className="projects-slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map(d=>(
        <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p className="p1">{d.desc}</p>
                  <p className="p2">Highlights: {d.tech}</p>
                  <a href={d.proj} target="_blank">See Video</a> 
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div> 
        </div>))}
      </div>
      <img src="assets/right.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/right.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
