import "./project.scss";
import "./card.scss";

import Data from "../../assets/github.json";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Project = () => {

gsap.registerPlugin(ScrollTrigger);
    
useGSAP(() => {
  // gsap.set(".top, h1", {
  //   opacity: 0,
  //   y: 200
  // });

  gsap.from(".top, h1", {
    opacity: 0,
    y: 200,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".work",
      start: "top 20%",
  
      toggleActions: "restart none none none",
     
    }
  });
});
  return (
    <div id="work" className="project">
      <div className="top">
        <div className="bg1"></div>
        <img className="svg1" src="./project-svg/Svg1.svg" alt="" />

        <h1>MY RECENT WORKS</h1>

        <div className="bg2"></div>
        <img className="svg2" src="./project-svg/Svg2.svg" alt="" />
      </div>
<div className="cards">
      {Data.map((data) => {
        return (
          
            <div className="card">
              <div className="left">
                <h3>{data.title}</h3>
                <div className="para">
                  <p>{data.desc}</p>
                </div>

                <div className="tags">
                  {data.tags.map((tag) => (
                    <p className="tag">{tag}</p>
                  ))}
                </div>
              </div>

              <Link to={`/details/${data.id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M 0.889 16 C 0.889 7.654 7.654 0.889 16 0.889 C 24.346 0.889 31.111 7.654 31.111 16 C 31.111 24.346 24.346 31.111 16 31.111 C 7.654 31.111 0.889 24.346 0.889 16 Z"
                    fill="transparent"
                    stroke-width="1.76"
                    stroke="rgb(128, 128, 128)"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M 10.666 21.333 L 21.333 10.666 M 21.333 10.666 L 21.333 21.333 M 21.333 10.666 L 10.666 10.666"
                    fill="transparent"
                    stroke-width="1.76"
                    stroke="rgb(55,55,55)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Link>

              <div className="image">
                <img loading="lazy" src={data.image} alt="" />
              </div>
            </div>
          
        );
      })}

      </div>
    </div>
  );
};

export default Project;
