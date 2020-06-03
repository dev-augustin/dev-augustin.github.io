import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/_PartySupplies.scss'

export default class PartySupplies extends Component {
    constructor(props) {
        super(props);
        this.state ={
            reviews: [],
            flowers:[],
            Review: "",
            Rating: "",
            reserve:[],
            quantity: "",
        }
      
    }

    async componentDidMount() {
 
        try{
                const response = await axios.get("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/party");
                console.log(response.data);
                this.setState({reserve: response.data})
            }
    
        catch(e){
                console.log("Error", e)
            }
        }
onSubmit=(event,image, title, price,productId ) =>{
    alert("Proceed to add quantity");
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
}
    
    render(){

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
            )
        }
    }
    