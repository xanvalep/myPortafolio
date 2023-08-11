import { useEffect,useState } from "react";
 import { baseUrl } from "../../utils/const";
 import axios from "axios";

export default function Items (props,{id,task,setupdateUI,updateMode} ) {
    const [tasks,setTasks] = useState([]);
    console.log(baseUrl);
 useEffect(()=>{
   axios.get(`${baseUrl}/get`)  
   .then((res)=>{console.log(res.data);})
 },[]);
    return(
        <div className="">
        <h3>tirala...</h3>
        </div>
    )
     

}