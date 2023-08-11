import "..//..//css/Navbar.scss";

import { useState } from "react";
import { Link} from "react-router-dom";
export default function Navbar (props ) {
// crea un estado por el switch 
const [switchToggled,setSwitchToggled]= useState(false);
   
const toggle= ()=> {
  switchToggled ? setSwitchToggled (false) : setSwitchToggled(true);
  console.log(switchToggled);
}

return (
      <div className="">
        <header className="App-header ">
            <div className="collapse navbar-collapse custom-navmenu " id="main-navbar">
             <div className="container py-2 py-md-5 ">
              <div className="row align-items-start">
                <div className="col-md-2">
                  <ul className="custom-menu">
                    <li className=""><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/works">Works</Link></li>
                  </ul>
                </div>  
                <div className="col-md-6 d-none d-md-block  mr-auto">
                  <div className="d-flex">
                      <div>
                        <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore. <br/> </em></p>
                      </div>
                  </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                   <h3>Hire Me</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiisexplicabo inventore. <br/> myemail@gmail.com </p>
                   <span className="bi bi-github mt-2 mx-1"></span>
                   <span className="bi bi-youtube mt-2 mx-1"></span>
                   <span className="bi bi-linkedin mt-2 mx-1"></span>
                   <span className="bi bi-facebook mx-1"></span>
                </div>
               </div>
             </div>
           </div>
           <nav className="navbar navbar-light custom-navbar">
             <div className="container">
                <Link to="/" className="navbar-brand">
                {/*<img src={stickert} alt="" srcset="" />*/}
                  </Link>
                  <button  onClick={toggle} className={switchToggled ? "burger active" : "burger"}  data-bs-toggle="collapse" data-bs-target="#main-navbar"><span></span></button>
              </div> 
          </nav>
        </header>
      </div>
)}



/**
  <a href="#" className="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar"></a> 
 */