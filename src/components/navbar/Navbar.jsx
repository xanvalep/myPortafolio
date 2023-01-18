import { Link} from "react-router-dom";
export default function Navbar (props ) {
    return (
      <div className="">
        <header className="App-header bg-secondary">
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
              <div className="tweet d-flex">
              <div>
                <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore. <br/> </em></p>
              </div>
             </div>
             </div>
               <div className="col-md-4 d-none d-md-block">
                   <h3>Hire Me</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiisexplicabo inventore. <br/> myemail@gmail.com </p>
                   <span className="bi bi-twitter text-white mt-2"></span>
                   <span className="bi bi-github text-white mt-2 mx-2"></span>
                   <span className="bi bi-youtube text-white mt-2"></span>
                   <span className="bi bi-linkedin text-white mt-2 mx-2"></span>
                   <span className="bi bi-facebook text-white mt-2 "></span>
               </div>
             </div>
             </div>
          </div>
          <nav className="navbar navbar-light custom-navbar">
             <div className="container">
               <Link to="/" className="navbar-brand">MyPortfolio.</Link>
               <a href="#" className="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar"><span></span></a>
            </div> 
          </nav>
        </header>
          
      </div>
)}


const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */


  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

