import  '..//..//css/Video.scss';

export default function Video (props ) {

return(
    <div className="container video bg-success d-flex justify-content-center align-items-center" > 
     <div className="container-fluid vdo">
       <iframe title='prueba' className="embed-responsive-item" src={props.src} allowfullscreen></iframe>
      </div>
  
    </div> 
)}