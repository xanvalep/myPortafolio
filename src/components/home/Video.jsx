import  '..//..//css/Video.scss';

export default function Video (props ) {

return(
    <div className="container my-3 video">
     <h2 className="mt-5 mb-5"> 
     featured content 
     </h2>
    
     <div className="container-fluid vdo">
       <iframe title='prueba' className="embed-responsive-item" src={props.src} allowfullscreen></iframe>
      </div>
  
    </div> 
)}