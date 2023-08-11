import "..//..//css/List.scss";
import { useEffect,useState} from "react";
import { loadData,getRequest } from "../../js/getData";

export default function List (props,{id,task,setupdateUI,updateMode} ) {

   const url = 'https://dummyjson.com/products';
   let data = loadData();
   const [item,setItem] = useState(data);
   const [state,setState] = useState("loading");
   const [error,setError] = useState("");
   
   useEffect(() => { 
      let promiseData = getRequest(url,{},"get",{});
      promiseData.then((res) => {
                         console.log(res);
                         setState("loaded");
                         setItem(res.data);
                        })
                .catch((err) => {
                 setState("error");
                 setError(err)
               console.log(err)
         });
   },[])
    if (state === "error") {
      return (
         
         <div className="">
            <h3>{error.toString()}</h3>
            </div>
      )
     } 
     if (state === "loading") {
      return (
         
         <div className="">
            <h3>loading ...</h3>
            </div>
      )
     }
      let info = item.products
      return(
        <div className="container my-3 animate__animated animate__fadeIn">
          <div className="">
          <ul className="wks">
          {props.task} 
        {  
         info.map(
          (e) => {
           return  <li>
            {e.title}
            <div className=""> 
             <i class="bi bi-pencil-fill"></i>
             <i class="bi bi-trash-fill"></i>
           </div>
           </li>  
          }        
          ) 
       }
            
          </ul>
          </div>    
          </div> 

     )


}