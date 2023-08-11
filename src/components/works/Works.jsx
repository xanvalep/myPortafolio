import { useState,useEffect } from "react"
import "..//..//css/Works.scss";
import Items from "./Items";
import List from "./List"
export default function Works (props ) {
  const [input,setInput]=useState("");

    return(
        <div className="container bck">
        <h2 className='mt-5 animate__animated animate__jackInTheBox'> Works</h2>

         <div class="row">
           <div class="col-sm-12 text-start">
           <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
           <button type= "submit">add Task </button>
       {/**<List/> */}    
           </div>
           <div class="col-sm-12 text-start content">
           <Items/>
           <List task="something"/>
           </div>
 
         </div>
        
       </div> 
    )}
    