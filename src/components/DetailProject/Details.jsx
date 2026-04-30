import './details.scss'
import { useNavigate, useParams } from 'react-router-dom'

import Data  from '../../assets/github.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect } from 'react'

const Details = () => {

    useEffect(() => {
    window.scrollTo(0, 0); // ✅ Page open hone pe top pe le jaao
  }, []);

     const {id} = useParams()
     const navigate = useNavigate()
     const project = Data.find((item) => item.id == id)
     console.log(project);

     useGSAP(()=>{
      gsap.from('.upper,.img',{
        y:100,
        opacity:0,
        duration:1,
        ease:"power2.out",
        stagger:0.3,
         toggleActions: "restart none none none",
      })
     })
     
     
  return (
    <div className='detail'>


   <button
        onClick={() => navigate(-1)}
        className="back"
      >
        ← Back
      </button>
     <div className="upper">
       <h1>{project?.title}</h1>
    <div className="tag">
      <div className="web"><h4>Web Design</h4></div>
      <div className="front"><h4>Frontend dev</h4></div>
    </div>
     </div>
    <div className="img"><img src={project?.image}  /></div>
    <div className="bottom">
      <div className="desc">
      <h3>Description</h3>
      <p>{project?.desc2}</p>
      </div>

      <div className="tech">
        <h3>Language</h3>
        <p className='tags'>{project?.tags.map((tag)=>{
          return <span className='tag'>{tag}</span>
        })}</p>
      </div>
    
    <div className="link">
      <h3>Links</h3>
      <div className="links">
       <div className="git"> <a href={project?.repoLink} target="_blank">Github</a>
       <img src="/arrow.svg" alt="" /></div>
      <div className="demo">  <a href={project?.demoLink} target="_blank">Live</a>
      <img src="/arrow.svg" alt="" />
</div>
      </div>
    </div>
    </div>

    <div className="outcome">
      <h2>Outcome</h2>
      <div className="box">
        <div className="box1"><p>{project?.Outcome1}</p></div>
        <div className="box2"><p>{project?.Outcome2}</p></div>
        <div className="box3"><p>{project?.Outcome3}</p></div>
      </div>
    </div>

    
    </div>
  )
}

export default Details
