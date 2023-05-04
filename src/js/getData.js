import axios from "axios";
let data = [];
function loadData () {
   return data;
}

function getRequest (urlRequest,headers,httpMethod,dataBody) {
   let promiseQuery = axios({
      url: urlRequest,
      headers: headers,
      method: httpMethod,
      data: dataBody,
   });
   return promiseQuery
}

export {loadData, getRequest}