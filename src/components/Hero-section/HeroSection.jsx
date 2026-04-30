import { useGSAP } from "@gsap/react";

import "./herosection.scss";
import gsap from "gsap";

const HeroSection = () => {


  useGSAP(()=>{

    gsap.from(".icon", {
      y:90,
      opacity:0,
      duration:1,
      stagger:0.1,
      ease:"power2.out",
      yoyo:true,
    })

    gsap.from(".hero-txt", {
      y:90,
      opacity:0,
      duration:1,
     
      ease:"power2.out",
      yoyo:true,
    })

    
    
  })
  return (
    <div id="home" className="hero-section">
      <div className="main"><div className="hero-txt">
        <span>TARA</span>
        <span className="txt2">NNUM</span>
      </div>




   
     <div className="icons">
       <img className="icon icon1" src="/hero-icons/icon1.svg" alt="" />
      <div className="icon debug">
        <h6>Debugging</h6>
      </div>
      <img className="icon icon2" src="/hero-icons/icon2.png" alt="" />
      <img className="icon icon3" src="/hero-icons/icon3.svg" alt="" />
      <img className="icon icon4" src="/hero-icons/code.png" alt="" />
          <img className="icon icon5" src="/hero-icons/figma.svg" alt="" />
     </div></div>
    </div>
  );
};

export default HeroSection;
