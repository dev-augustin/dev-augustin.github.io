// import React, { Component } from 'react'
// import axios from 'axios';

// const API_KEY=process.env.REACT_APP_API_KEY;
// console.log(API_KEY);


// // const params={
// //     api_key: API_KEY,
// //     type: "category",
// //     language: "en_US",
// //     customer_location: "us",
// //     url: "https://www.amazon.com/s?k=birthday+gifts&rh=n%3A16310101%2Cn%3A2255576011&dc&qid=1590771862&rnid=2941120011&ref=sr_nr_n_2"
// // }


// export default class Search extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             order: [],
//             results: []
//         }
//     }

//     componentDidMount(){
//         this.search();
//     }
//     search = async () =>{

//         try{
// const response= await axios.get('https://asos2.p.rapidapi.com/products/v2/list', { 
//     "headers":{
//         "content-type":"application/octet-stream",
//         "x-rapidapi-host":"asos2.p.rapidapi.com",
//         "x-rapidapi-key":API_KEY,
//         "useQueryString":true,
//     },"params":{
//         "country":"US",
//         "currency":"USD",
//         "sort":"freshness",
//         "lang":"en-US",
//         "sizeSchema":"US",
//         "offset":"0",
//         "categoryId":"4209",
//         "limit":"48",
//         "store":"US"
//         }
//     }    
// )

//             console.log(response)
 
//     }
//     catch(e){

//     }

//             // const response= await axios.get('https://api.rainforestapi.com/request', { params })
//             // console.log(response)
//             // console.log("data: ",response.data);
//             // console.log("category: ",response.data.category_results[0]);
//             // console.log("asin: ",response.data.category_results[0].asin);
//             // console.log("image ",response.data.category_results[0].image);
//             // console.log("title ",response.data.category_results[0].title);
//             // console.log("name ",response.data.category_results[0].categories[0].name);
//             // console.log("name ",response.data.category_results[0].prices[0].raw);
//             // console.log("categoryAll: ",response.data.category_results);
//         // }
            
//         // catch(e){
//         //     console.log(e)
//         // }
 
  
   
    
//         }
       
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
