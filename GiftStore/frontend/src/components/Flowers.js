import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/_Flowers.scss'

export default class Flowers extends Component {
    constructor(props) {
        super(props);
        this.state ={
            reviews: [],
            flowers:[],
            Review: "",
            Rating: "",
            reserve:[],
            quantity: "",
            total: 0
        }
      
    }

    async componentDidMount() {
 
        try{
                const response = await axios.get("/rosy_api/v1/flowers");
                console.log(response.data);
                this.setState({reserve: response.data})
                console.log(response.data[1].productId)
                console.log(response.data[1].price)
            }
    
        catch(e){
                console.log("Error", e)
            }
        }
//  onChange = index => event =>{
//     event.preventDefault();
//      console.log(event.target.value)
//      let qty = [...this.state.quantity];
//      qty[index] = event.target.value;
//      this.setState({qty})



onSubmit=(event,image, title, price, productId) =>{
    // this.setState({quantity: event.target.value})
    alert("Item added");
    // console.log(event.target.value)
    console.log(title, productId, image);
    console.log(price)

    event.preventDefault();
    this.props.history.push({
                        pathname :'/view/', 
                        state:{
                            title : title,
                            price : price,
                            productImage : image,
                            productId : productId,
                        }})
    // // console.log(value1)
    // console.log(value2)
    // this.setState({reviews: value1});
    // this.setState({flowers: value2})
    // console.log(this.state.reviews)
    // console.log(this.state.flowers)
  
    // let formData = {
    //     price : price,
    //     title : title,
    //     productImage : image,
    //     productId : productId
    //     // quantity : event.target.value
    // }
    // console.log(formData)

    // this.postAPI(formData);
}

// postAPI = async (formData) =>{
//     console.log(formData)
//     try{
//             const response = await axios.post("/rosy_api/v1/orders", formData
           
//             );
//             console.log(response.data)
         
//             this.props.history.push({
//                 pathname :'/view/', 
//                 state:{
//                     title : response.data.title,
//                     price : response.data.price,
//                     productImage : response.data.productImage,
//                     productId : response.data.productId,
//                 }
            
            
//             });    
//             // this.setState({reserve: response.data, isLoading: false}) */}
//         }

    // catch(e){
    //         console.log("Error", e)
    //     }
    // }
    render(){
        // const {reserve} = this.state;
        // let flowersList= this.state.reserve.map((item) =>{
        //     return(
    
        //         <div className="item-list" key={item.id}>
        //             <div>
        //                 <img src={item.productImage} alt="flowers" height="200px" widht="150px"/>
        //                 <span>{item.title}</span>
        //                 <p>${item.price}</p>
        //             </div>
        //             <button onClick={(e)=> {this.onSubmit(e, item.productImage, item.title, item.price, item.productId)}}>Add</button>
        //         </div>
        //     )})
           return(
           <React.Fragment>
               <div className="results-container"> 
                {
                    this.state.reserve.map((item) => {
                        return (

                            <div className="poster-results"><ul key= {item.id} className="lists-display">
                            <li className="results-li"> <img src= {item.productImage}  alt="different Images" height = "300px" width="250px" /> <h5 id="item-title">{item.title} </h5> 
                            <h5 id="item-price">$ {item.price} </h5> 
                            <button className="add-button" onClick={(e)=> {this.onSubmit(e, item.productImage, item.title, item.price, item.productId)}}>Add</button>
                            </li>

                            </ul> 
                          
                            </div>)
                            
                       
                    } )
                }
                </div>
           </React.Fragment>

                       
                    //  <div className="results-container">
                    //      {flowersList}
                    //  </div>     
        
                                
              
                       
            )
        }
    }
    