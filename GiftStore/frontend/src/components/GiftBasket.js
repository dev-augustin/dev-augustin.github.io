import React from 'react'

export default function GiftBasket() {
    return (
        <div>
            
        </div>
    )
}


// import React, { Component } from 'react';
// import axios from 'axios';
// // import '../styles/Search.css';
// // import ErrorMessage from './ErrorMessage';
// import {Form, FormControl, Button} from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import '../styles/_GiftBasket.scss'

// // const API_KEY=process.env.REACT_APP_API_KEY; 
// const params={
//         api_key: API_KEY,
//         type: "category",
//         url: "https://www.amazon.com/s?k=gift+baskets&rh=n%3A2255572011&pd_rd_r=14ca9469-a37d-4280-87bf-c973a1221454&pd_rd_w=6hGNi&pd_rd_wg=2Rkvd&pf_rd_p=c856543c-2236-42b5-8daa-bc8c644a2565&pf_rd_r=M7YNTCAX2KA01QN71Y41&qid=1591021006&ref=sxts_ref_scx_alster_1"
//    }

// export default class GiftBasket extends Component {
            
//     constructor(props){
//         super(props);
//         this.state = {
//             displayResults: '',
//             reserve:[],
//             price: 3
//         }
//     }
    
// // //     //  searchText = (e) =>{
// // //     //         e.preventDefault();
// // //     //         this.setState({searchText : e.target.value})
// // //     //  }
     
//     componentDidMount(){
//         this.searchRequest();
//     }

//     //  handleSearch = (e) =>{
//     //     e.preventDefault();
//     //     this.searchRequest();
        
//     // }

//     searchRequest = async () =>{
//         // console.log(API_KEY)
//         try{
      
//             const response= await axios.get('https://api.rainforestapi.com/request', { params })
//             console.log(response)
//             console.log("data: ",response.data);
//             console.log("category: ",response.data.category_results[0]);
//             console.log("asin: ",response.data.category_results[0].asin);
//             console.log("image ",response.data.category_results[0].image);
//             console.log("title ",response.data.category_results[0].title);
//             console.log("name ",response.data.category_results[0].categories[0].name);
//             console.log("name ",response.data.category_results[0].prices[0].value);
//             console.log("categoryAll: ",response.data.category_results);
//             console.log("categoryAll: ",response.data.category_results.title.substring(0,25));
//              let x = (this.state.price+ (Math.random()*2)).toFixed(2)
//              console.log(x);
//             // let y= (this.state.quantity*title).toFixed(2);
// // //             // for (let i=0; i< response.data.length; i++);
            
// // //             const data= {
// // //                 category: response.data.category_results[0].categories[0].name ,
// // //                 price: response.data.category_results[0].prices[0].raw,
// // //                 product_id: response.data.category_results[0].asin,
// // //                 product_image: response.data.category_results[0].image,
// // //                 title: response.data.category_results[0].title
// // //             }


// // //             const response1= await axios.get('https://api.rainforestapi.com/request', { params1 })
// // //             console.log(response1)
// // //             console.log("data: ",response1.data);
//             this.setState({reserve: response.data.category_results})
// // //             this.postAPI(data);
//         }
            
//         catch(e){
//             console.log(e)
//         }
//     }
// // //      postAPI  = async (resultData) =>{
// // //         try{
// // //             const response = await axios.post("/rosy_api/v1/", resultData
           
// // //             );
// // //             console.log(response.data);
// // //             this.setState({reserve: response.data, isLoading: false}) 
// // //             this.props.history.push('/manageReservation/');
// // //         }

// // //     catch(e){
// // //             console.log("Error", e)
// // //         }

// // //      }
// // //     render() {
// // //         // let response = this.state.displayData;
// // //         return (
// // //             <React.Fragment>
// // //                 {/* <Form className="search-container">
// // //                     <FormControl type="text" value={this.state.searchText} id="search-text" onChange={this.searchText} placeholder="search text" />
// // //                     <Button  id="search-button" onClick={this.handleSearch}>Search</Button>
// // //                 </Form> */}
// // //                 <div className="results-container"> 
// // //                 {
             
// // //                     this.state.displayData.map((result) => {
// // //                         return (

// // //                             <div className="poster-results"><ul key= {result.id} className="lists-display">
// // //                             <li className="results-li"> <img src= {result.image} alt="different Images" height = "400px" width="260px" /> <h5>Poster ID: {result.title} </h5> 
// // //                              </li>
// // //                             </ul> </div>)
                       
// // //                     } )
// // //                 }
// // //                 </div>
// // //              </React.Fragment>
// // //         )
// // //     }
// // // }

// onSubmit=(event,image, title, price,productId ) =>{
//     // this.setState({quantity: event.target.value})
//     // console.log(event.target.value)
//     alert("Proceed to add quantity");
//     console.log(title, productId, image);
//     console.log(price)

//     event.preventDefault();
//     this.props.history.push({
//                         pathname :'/view/', 
//                         state:{
//                             title : title,
//                             price : price,
//                             productImage : image,
//                             productId : productId,
//                         }})




// }
// render(){
// console.log("inside GiftBasket")

// return(
//     <React.Fragment>
//                          <h5 className="gift-basket-header">Amazon Gift Baskets</h5>
//                 <div className="results-container"> 
               
//          {
//              this.state.reserve.map((item, index) => {
//                  return (

//                      <div className="poster-results"><ul key= {item.id} className="lists-display">
//                      <li className="results-li"> <img src= {item.image}  alt="different Images" height = "300px" width="250px" /> <h5 id="item-title">{item.title.substring(0,30)} </h5> 
//                      <h5 id="item-price">${this.state.price+ (Math.random()*2).toFixed(2)}</h5>
// {/*              
//                      <h5 id="item-price">$ <div> {item.prices.map(val => <div>{val.value}</div>)}</div> */}
//                      {/* </h5>  */}
//                      <button className="add-button" onClick={(e)=> {this.onSubmit(e, item.image, item.title.substring(0,30), this.state.price+ (Math.random()*2).toFixed(2), item.asin, item.id)}}>Add</button>
//                      </li>

//                      </ul> 
                   
//                      </div>)
                     
                
//              } )
//          }
//          </div> 
//         {/* <div className="results-container"> 
//          {
//              this.state.reserve.map((item) => {
//                  return (

//                      <div className="poster-results"><ul key= {item.id} className="lists-display">
//                      <li className="results-li"> <img src= {item.image}  alt="different Images" height = "300px" width="250px" /> <h5 id="item-title">{item.title.substring(0,250)} </h5> 
//                      <h5 id="item-price">$ {item.prices.value} </h5> 
//                      <button className="add-button" onClick={(e)=> {this.onSubmit(e, item.image, item.title, item.prices.value, item.asin, item.id)}}>Add</button>
//                      </li>

//                      </ul> 
                   
//                      </div>)
                     
                
//              } )
//          }
//          </div> */}
//     </React.Fragment>
// )}
//         }