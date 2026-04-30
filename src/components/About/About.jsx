import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./about.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin only once
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  useGSAP(() => {
    if (imgRef.current) {
      gsap.from(imgRef.current, {
        scale: 0.6,
        opacity: 0.2,
        duration: 1,

        ease: "power2.out",
        yoyo: true,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 65%",
          end: "-10%",
          scrub: true,
        },
      });
    }
  }, []);


  
useGSAP(() => {
  gsap.fromTo(
    ".about-txt",
    {
      y: 200,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 20%",
        toggleActions: "restart none none none",
      
      }
    }
  );
}, []);


  return (
    <div id="about" className="about-container">
      <div className="about-img">
        <div className="bg1"></div>
        <div className="bg2"></div>
        <img className="icon icon1" src="./about-img/img1.svg" alt="" />
        <img className="icon icon2" src="./about-img/img2.svg" alt="" />
        <div className="img" ref={imgRef}>
          <img src="./about-img/about-img.png" alt="" />
        </div>
      </div>
      <div className="about-txt">
        <div className="heading">
          <h3>I’m a multidisciplinary developer based in Nashik.</h3>
        </div>
        <div className="para">
          <p>
            Driven by curiosity to build clean, modern , responsive, and
            user-friendly web interfaces. As a <span>Frontend Developer</span>{" "}
           , I focus on transforming design concepts into functional,
            accessible, and engaging digital experiences while continuously
            learning modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
