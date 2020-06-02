import React from 'react'

export default function Handmade() {
    return (
        <div>
            <h1>Handmade</h1>
        </div>
    )
}



// import React, { Component } from 'react';
// import axios from 'axios';
// // import '../styles/Search.css';
// // import ErrorMessage from './ErrorMessage';
// import {Form, FormControl, Button} from "react-bootstrap";
// import { Link } from 'react-router-dom';

// const API_KEY=process.env.REACT_APP_API_KEY;
// const params={
//         api_key: API_KEY,
//         type: "category",
//         language: "en_US",
//         customer_location: "us",
//         url: "https://www.amazon.com/s?k=birthday+gifts&rh=n%3A16310101%2Cn%3A2255576011&dc&qid=1590771862&rnid=2941120011&ref=sr_nr_n_2"
//     }
// const params1= {
//     api_key:API_KEY,
//     type: "search",
//     amazon_domain: "amazon.com",
//     search_term: "birthday gifts",
//     sort_by: "price_high_to_low"
//   }

// export default class Handmade extends Component {
            
//     constructor(props){
//         super(props);
//         this.state = {
//             displayResults: '',
//             displayData:[],
//         }
//     }
    
//     //  searchText = (e) =>{
//     //         e.preventDefault();
//     //         this.setState({searchText : e.target.value})
//     //  }
     
//     componentDidMount(){
//         this.searchRequest();
//     }

//      handleSearch = (e) =>{
//         e.preventDefault();
//         this.searchRequest();
        
//     }

//     searchRequest = async () =>{
//         console.log(API_KEY)
//         try{
      
//             // const response= await axios.get('https://api.rainforestapi.com/request', { params })
//             console.log(response)
//             console.log("data: ",response.data);
//             console.log("category: ",response.data.category_results[0]);
//             console.log("asin: ",response.data.category_results[0].asin);
//             console.log("image ",response.data.category_results[0].image);
//             console.log("title ",response.data.category_results[0].title);
//             console.log("name ",response.data.category_results[0].categories[0].name);
//             console.log("Price Raw ",response.data.category_results[0].prices[0].raw);
//             console.log("Price Value ",response.data.category_results[0].prices[0].value);
//             console.log("categoryAll: ",response.data.category_results);
//             console.log("categoryAll: ",response.data.category_results.title);

//             // for (let i=0; i< response.data.length; i++);
            
//             const data= {
//                 category: response.data.category_results[0].categories[0].name ,
//                 price: response.data.category_results[0].prices[0].raw,
//                 product_id: response.data.category_results[0].asin,
//                 product_image: response.data.category_results[0].image,
//                 title: response.data.category_results[0].title
//             }


//             // const response1= await axios.get('https://api.rainforestapi.com/request', { params1 })
//             // console.log(response1)
//             // console.log("data: ",response1.data);
//             this.setState({displayData: response.data.category_results})
//             this.postAPI(data);
//         }
            
//         catch(e){
//             console.log(e)
//         }
//     }
//      postAPI  = async (resultData) =>{
//          console.log("hi");
//          console.log(resultData)
//         try{
//             const response = await axios.post("/rosy_api/v1/orders/", resultData
           
//             );
//             console.log(response.data);
//             this.setState({reserve: response.data, isLoading: false}) 
//             this.props.history.push('/manageReservation/');
//         }

//     catch(e){
//             console.log("Error", e)
//         }

//      }
//     render() {
        
//         let response = this.state.displayData;
//         console.log(response)
//         return (
//             <React.Fragment>
//                 {/* <Form className="search-container">
//                     <FormControl type="text" value={this.state.searchText} id="search-text" onChange={this.searchText} placeholder="search text" />
//                     <Button  id="search-button" onClick={this.handleSearch}>Search</Button>
//                 </Form> */}
//                 <div className="results-container"> 
//                 <h1>Results</h1>
//                 {
             
//                     this.state.displayData.map((result) => {
//                         return (

//                             <div className="poster-results"><ul key= {result.id} className="lists-display">
//                             <li className="results-li"> <img src= {result.image} alt="different Images" height = "400px" width="260px" /> <h5>Poster ID: {result.title} </h5> 
//                              </li>
//                             </ul> </div>)
                       
//                     } )
//                 }

//                 <div>
//                 {this.state.displayData.map((result) => <ul><li>{result.asin}</li>
//             <li>{result.prices.value}</li>
//             <li>{result.title}</li></ul>
//     )}
//                 </div>
//                 </div>
//              </React.Fragment>
//         )
//     }
// }



// // import React, { Component } from 'react'
// // import axios from 'axios';

// // const API_KEY=process.env.REACT_APP_API_KEY;
// // // console.log(API_KEY);


// // // const params={
// // //     api_key: API_KEY,
// // //     type: "category",
// // //     language: "en_US",
// // //     customer_location: "us",
// // //     url: "https://www.amazon.com/s?k=birthday+gifts&rh=n%3A16310101%2Cn%3A2255576011&dc&qid=1590771862&rnid=2941120011&ref=sr_nr_n_2"
// // // }


// // export default class Handmade extends Component {
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             order: [],
// //             results: []
// //         }
// //     }

// //     componentDidMount(){
// //         this.search();
// //         console.log("hi")
// //     }
// //     search = async () =>{

// //         try{
// // const response= await axios.get('https://asos2.p.rapidapi.com/products/v2/list', { 
// //     "headers":{
// //         "content-type":"application/octet-stream",
// //         "x-rapidapi-host":"asos2.p.rapidapi.com",
// //         "x-rapidapi-key":API_KEY,
// //         "useQueryString":true,
// //     },"params":{
// //         "country":"US",
// //         "currency":"USD",
// //         "sort":"freshness",
// //         "lang":"en-US",
// //         "sizeSchema":"US",
// //         "offset":"0",
// //         "categoryId":"4209",
// //         "limit":"48",
// //         "store":"US"
// //         }
// //     }    
// // )

// //             console.log(response.data)
 
// //     }
// //     catch(e){

// //     }

// //             // const response= await axios.get('https://api.rainforestapi.com/request', { params })
// //             // console.log(response)
// //             // console.log("data: ",response.data);
// //             // console.log("category: ",response.data.category_results[0]);
// //             // console.log("asin: ",response.data.category_results[0].asin);
// //             // console.log("image ",response.data.category_results[0].image);
// //             // console.log("title ",response.data.category_results[0].title);
// //             // console.log("name ",response.data.category_results[0].categories[0].name);
// //             // console.log("name ",response.data.category_results[0].prices[0].raw);
// //             // console.log("categoryAll: ",response.data.category_results);
// //         // }
            
// //         // catch(e){
// //         //     console.log(e)
// //         // }
 
  
   
    
// //         }
       
// //     render() {
// //         return (
// //             <div>
// //                 <h1>Welcome to Handmade gifts</h1>
// //             </div>
// //         )
// //     }
// // }
