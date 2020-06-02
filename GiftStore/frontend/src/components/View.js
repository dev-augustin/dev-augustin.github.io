import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/_View.scss'

export default class View extends Component {
    constructor(props){
        super(props)
            this.state = {
                quantity : "",
                total: 0
            }
        }
    

    handleChange = (event) =>{
        console.log("inside handleChange")
        console.log(event.target.name, event.target.value)
         event.preventDefault();
         this.setState({[event.target.name] : event.target.value})
  
    }

    onSubmit = (event,image, title, price, productId)=>{
        event.preventDefault();
        console.log(price, productId, title, image)
        console.log(this.state.quantity*title);
        let y= (this.state.quantity*title).toFixed(2);
        console.log(y)
        this.setState({total: y});
        let formData = {
            quantity: this.state.quantity,
        
            price : title,
            productImage : price,
            title : image,
            productId : productId,
            total : y

        }
        console.log(formData)
      
    this.postAPI(formData);
}
onContinue = (event,image, title, price, productId)=>{
    alert("Item added to cart. Continue shopping");
    event.preventDefault();
    let y= (this.state.quantity*title).toFixed(2);
    this.setState({total: y});
    let formData = {
        quantity: this.state.quantity,
    
        price : title,
        productImage : price,
        title : image,
        productId : productId,
        total : y
    }
    console.log(formData)
  
this.postContinueAPI(formData);
}

postContinueAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.post("/rosy_api/v1/orders", formData
           
            );
            console.log(response.data)
            this.props.history.push('/');
        }

    catch(e){
            console.log("Error", e)
        }
    }  
    

postAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.post("/rosy_api/v1/orders", formData
           
            );
            console.log(response.data)
            this.props.history.push('/myCart');
        }

    catch(e){
            console.log("Error", e)
        }
    }  
    

    render() {
        console.log("inside render " ,this.props.location.state.productId);
        return (
            <React.Fragment>
              <form>
              <div className="view-container">
            
                <div className="item-details">

                    <img className="image-view" src={this.props.location.state.productImage} height="300px" width="250px" alt="flowers" />
                    <h5 id="single-item-title">{this.props.location.state.title}</h5>
                    <h5 id="single-item-price">Price: ${this.props.location.state.price}</h5>
                    <br/><label >Quantity</label>&nbsp;&nbsp;
                    <input type="text" value={this.state.quantity} id={this.props.location.state.productId} name="quantity" style={{width: '40px'}}
                    onChange={this.handleChange}/>
 

                </div>
            
             <div className="button-items">
                <br/>
                <button id="checkOut-button" onClick={(e)=> {this.onSubmit(e, this.props.location.state.title, this.props.location.state.price, this.props.location.state.productImage, this.props.location.state.productId)}}>Add & View Item in Cart</button> 
                <Link to='/flowers/3.2'><button onClick={(e)=> {this.onContinue(e, this.props.location.state.title, this.props.location.state.price, this.props.location.state.productImage, this.props.location.state.productId)}} id="continue-button" >Continue Shopping</button></Link> 
            </div>
            </div>
              </form>
            </React.Fragment>
        )
    }
}
