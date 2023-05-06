import "..//..//css/About.scss";
import Legend from "./Legend";
export default function About (props ) {
    return(
        <div className="container bck">
         <h2 className='mt-3 mb-5 animate__animated animate__jackInTheBox'> About</h2>
         <Legend/>
          <div className="text-center">
          <h3 className='mt-3 mb-5 animate__animated animate__fadeIn'> skills</h3>

          </div>
          <div class="skill">
             <p className="text-start"> 
             <span className="">
             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
             </span>
             <br />
             <span>
             If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
             </span>
             </p>
          
     
          </div>
        </div> 
    )}