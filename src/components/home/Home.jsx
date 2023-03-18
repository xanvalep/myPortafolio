import '..//..//css/Home.scss';
import logR from '..//..//svgs/logR.svg';
import logx from '..//..//svgs/logx.svg';
import Typskill from './Typskill';
import Video from './Video';


export default function Home (props ) {
  let url ="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
return(
    <div className="container my-3"> 
     <section id="hero">
      <div className="hero-container">
      <h1 className="animate__animated animate__fadeIn">
   
      <img src={logR} alt="" srcset="" />
      
      </h1>
      <Typskill/>  

      </div>
     </section>
  

    </div>  
)}
