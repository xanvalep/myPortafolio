import "..//..//css/List.scss";
import { useEffect,useState} from "react";
import { loadData,getRequest } from "../../js/getData";

export default function List (props ) {
  /*   
  const [data,setData] = useState(0);
   const url = 'https://dummyjson.com/products';
   useEffect(() => {
      fetch(url)
      .then( (response) => response.json()).then(json => { 
        console.log("jsooon",json)
        setData(json.data)
         }).catch(e => { 
            console.log("e", e);
          })
   },[])
   
  console.log("antes del return",data);

   return(
  
      <div className="container my-3 animate__animated animate__fadeIn">
        <div className="legend-wdthSpc text-center">
        <ul className="wks">
          probando
          {console.log("dentro del return",data)
          
          
          }
        </ul>
        </div>    
        </div> 
      )
   */  
   /**   
    * 
   */
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
           
        {  
         info.map(
          (e) => {
           return  <li>{e.title}</li>  
          }
          
          )
        
       
       }
            
          </ul>
          </div>    
          </div> 

     )


}