/*import  '..//css/Home.css';*/
import '..//..//css/Home.css';
import Typskill from './Typskill';
import Video from './Video';

export default function Home (props ) {
return(
    <div> 

    <div className="container my-3">
     <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container" data-aos="fade-in">
        <h1>Zander Valero</h1>
        <Typskill/>  
      </div>
     </section> 
     </div> 
      <Video/>
      <div className='container'>
      <hr className="border border-dark border-1  opacity-100" />
      </div>
     <div className='container svg'>
      
     </div>

    </div>  
)}
