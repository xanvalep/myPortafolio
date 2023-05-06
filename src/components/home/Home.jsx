import '..//..//css/Home.scss';
import logxx from '..//..//svgs/logxx.svg';
import Typskill from './Typskill';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect,useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
export default function Home (props ) {
  let imgLog = useRef(null);

  useEffect(() => {
      console.log(imgLog);
      const tl = gsap.timeline({repeat: 0, repeatDelay: 1});
      tl.to(imgLog, {opacity: 0, duration: 1});
      tl.to(imgLog, {opacity: 1, duration: 1});
  },[])

return(
    <div className="container my-3"> 
     <section id="hero">
      <div className="hero-container">
      <h1 >
      <img 
     ref={e => { imgLog = e}}
     src={logxx} alt="" srcset="" />
      </h1>
      
      <Typskill/>  

      </div>
     </section>
  

    </div>  
)}
