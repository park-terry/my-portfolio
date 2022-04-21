import "./education.scss"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function Education() {

  const {ref, inView} = useInView({
    threshold: 0.2
  });

  const animation = useAnimation();

  useEffect(()=> {
    console.log("use effect hook, inView = ", inView);
    if(inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        duration: 3
      });
    }
    if(!inView) {
      animation.start({
        opacity: 0
      })
    }
  }, [inView]);

  return (
    <di v className="education" id="education">
      <motion.h1 className="education-title"
        animate= {animation}>
        Education
      </motion.h1>
      <div ref={ref} className="education-container">
        <div className="education-left">
          <motion.img src="assets/ubc.png" alt="" className="education-img"
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9
            }}
            >
          </motion.img> 
        </div>
        <div className="education-right">
          <div className="education-sub">
            <h2>Bachelor of Applied Science</h2>
            <p>4th-year Electrical Engineering student at the University of British Columbia, Vancouver Campus</p>
          </div>
          <div className="education-awards">
            <h4 className="education-achievements">
              Achievements:
            </h4>
            <h4 className="education-awards-titles">
              Trek Excellence Scholarship
            </h4>
            <p className="education-awards-desc">
              Awarded to international students in the top 5% to 10% of their undergraduate year, faculty, and school
            </p>
            <h4 className="education-awards-titles">
              Faculty of Applied Science International Student Scholarship
            </h4>
            <p className="education-awards-desc">
              Awarded to students with strong academic achievement, engagement in the Faculty, and the potential to make a scholarly contribution within their chosen field of study
            </p>
          </div>
        </div>
      </div>
    </di>
  )
}
