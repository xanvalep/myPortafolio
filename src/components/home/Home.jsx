import '..//..//css/Home.scss';
import logR from '..//..//svgs/logR.svg';
import Typskill from './Typskill';


export default function Home (props ) {
 
return(
    <div className="container my-3"> 
     <section id="hero">
      <div className="hero-container">
      <h1 >
   
      <img className="animate__animated animate__fadeIn" src={logR} alt="" srcset="" />
      </h1>
      
      <Typskill/>  

      </div>
     </section>
  

    </div>  
)}
