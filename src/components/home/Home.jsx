import '..//..//css/Home.scss';
import Typskill from './Typskill';
import Video from './Video';


export default function Home (props ) {
  let url ="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
return(
    <div className="container my-3"> 


     <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container" data-aos="fade-in">
        <h1>Zander Valero</h1>
        <Typskill/>  
      </div>
     </section>  
      <Video src={url} />

    </div>  
)}
