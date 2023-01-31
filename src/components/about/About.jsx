import "..//..//css/About.scss";
import Legend from "./Legend";
export default function About (props ) {
    return(
        <div className="container bck">
         <h2 className='mt-3 mb-5 animate__animated animate__zoomIn'> About</h2>
         <Legend/>
          <div className="text-start bg-secondary">
          <h3 className='mt-3 mb-5 animate__animated animate__zoomIn'> skills</h3>

          </div>
          <div class="row but">
            <div class="col-sm-6 col-md-4 mt-5 mb-5">
             <p className=""> 
             <span className="">
             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
             </span>
             <br />
             <span>
             If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
             </span>
             </p>
            </div>
            <div class="col-sm-6 col-md-4 mt-5 mb-5">
                 <div class="">
                  imagen 
                   </div>
             
            </div>
            <div class="d-sm-none d-md-block col-md-4">
            </div>
          </div>
        </div> 
    )}