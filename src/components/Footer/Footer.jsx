import { useGSAP } from '@gsap/react'
import './footer.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

const Footer = () => {


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from(".together",{
      scale:0,
      opacity:0, 
      duration:1,
       ease:"bounce",
        scrollTrigger:{ 
          trigger:".footer",
           start:"top 80%",
           
    
            toggleActions:"restart none none none" 
          }
         })

    })
  
  return (
    <div className='footer'>
        <div className="text">
          <h2>LET'S WORK</h2>
          <h3 className='together'>Together !</h3>
        </div>


        <div className="box">
          <div className="left">
            <img src="./logo.png" alt="" />
           <div className="txt"> <p>tannuzkhan123@gmail.com</p>
           <h4>8857965122</h4></div>
          </div>
          <div className="right">
            <a href="https://www.linkedin.com/in/tarannum-zahid-khan-561888330/" target='_blank' > <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M 6.667 4 C 5.193 4 4 5.193 4 6.667 L 4 25.333 C 4 26.807 5.193 28 6.667 28 L 25.333 28 C 26.807 28 28 26.807 28 25.333 L 28 6.667 C 28 5.193 26.807 4 25.333 4 Z M 6.667 6.667 L 25.333 6.667 L 25.333 25.333 L 6.667 25.333 Z M 10.372 8.422 C 9.23 8.422 8.544 9.109 8.544 10.023 C 8.544 10.938 9.23 11.622 10.258 11.622 C 11.401 11.622 12.086 10.938 12.086 10.023 C 12.086 9.109 11.4 8.422 10.372 8.422 Z M 8.635 13.333 L 8.635 22.667 L 12 22.667 L 12 13.333 Z M 13.776 13.333 L 13.776 22.667 L 17.141 22.667 L 17.141 17.565 C 17.141 16.046 18.224 15.828 18.55 15.828 C 18.875 15.828 19.745 16.154 19.745 17.565 L 19.745 22.667 L 23 22.667 L 23 17.565 C 23 14.636 21.698 13.333 20.07 13.333 C 18.442 13.333 17.574 13.875 17.141 14.635 L 17.141 13.333 Z" fill="rgb(255,255,255)"></path></svg></a>


            <a href="https://github.com/tarannum5537" target='_blank' ><img src="./github-fill.svg" alt="" /></a>
          </div>
        </div>
      
    </div>
  )
}

export default Footer
