import  '..//css/Video.css';

export default function Video (props ) {
return(
    <div className="container bg-warning my-3 video">
     <h2 className="mt-5 mb-5"> 
     Video
     </h2>
     <div className="container-fluid embed-responsive embed-responsive-16by9 mb-5">
       <iframe title='prueba' className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>
    </div> 
)}