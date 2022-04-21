import "./contact.scss"
import { GitHub, LinkedIn, LocationOn, MailOutline } from "@material-ui/icons"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function Contact() {
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
    <div className="contact" id="contact">
      <motion.h1 className="contact-title"
        animate={animation}>
        Contact
      </motion.h1>
      <div className="icons">
          <a href="mailto:sdparkfive@gmail.com" target="_blank">
            <MailOutline className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/park-terry" target="_blank">
            <LinkedIn className="icon"/>
          </a>
          <a href="https://github.com/park-terry" target="_blank">
            <GitHub className="icon"/>
          </a>
      </div>
      <div className="itemContainer">
          <LocationOn className="icon"/>
          <span>Currently Located in Vancouver</span>
          <span></span>
      </div>
    </div>
  )
}
