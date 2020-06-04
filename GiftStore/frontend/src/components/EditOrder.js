import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../styles/_EditOrder.scss'


export default class EditOrder extends Component {

  constructor(props) {
    super(props);
    this.state ={
        id: this.props.match.params.id,
        reserve: [],
        price: "",
        productId: "",
        productImage: "",
        quantity: "",
        title: "",
        total:0,
        
    }
  }


  async componentDidMount() {
 
    try{
            const response = await axios.get("/rosy_api/v1/orders/"+this.props.match.params.id)
            this.setState({
            price: response.data.price,
            productId: response.data.productId,
            productImage: response.data.productImage,
            quantity: response.data.quantity,
            title: response.data.title,
            total: response.data.total

            })
        }

    catch(e){
            console.log("Error", e)
        }
    }


handleChange = (event) =>{

     event.preventDefault();
     this.setState({[event.target.name] : event.target.value})
}

onSubmit=(event) =>{
    event.preventDefault();
    let y= (this.state.quantity*this.state.price).toFixed(2);
    this.setState({total: y});
    let formData = {
        price: this.state.price,
        productId: this.state.productId,
        productImage: this.state.productImage,
        quantity: this.state.quantity,
        title: this.state.title,
        total: y
    };
    this.putAPI(formData);
}

putAPI = async (formData) =>{
  
    try{
            const response = await axios.put("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders/"+this.props.match.params.id, formData
           
            );
           
            this.props.history.push('/myCart');
        }

    catch(e){
            console.log("Error", e)
        }

    }

    onContinue=(event) =>{
        alert("Quantity updated to cart. Continue shopping");
        event.preventDefault();
        let y= (this.state.quantity*this.state.price).toFixed(2);
        this.setState({total: y});
        let formData = {
            price: this.state.price,
            productId: this.state.productId,
            productImage: this.state.productImage,
            quantity: this.state.quantity,
            title: this.state.title,
            total: y
        };
        this.putContinueAPI(formData);
    }
    
    putContinueAPI = async (formData) =>{
     
        try{
                const response = await axios.put("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders/"+this.props.match.params.id, formData
               
                );
              
                this.props.history.push('/flowers/3.2');
            }
    
        catch(e){
                console.log("Error", e)
            }
    
        }
   render(){
 
       return(
        <React.Fragment>
        <form>
        <div className="view-container">
            <h3 className="edit-order-header">Edit your Order Quantity</h3>
            <div className="item-details">
               <img className="image-view"  src={this.state.productImage} height="300px" width="250px" alt="flowers" />
                <h5 id="single-item-title">{this.state.title}</h5>
                <h5 id="single-item-price">Price: ${this.state.price}</h5>
                <label>Quantity</label>&nbsp;&nbsp;
                <input type="text" value={this.state.quantity} id={this.state.productId} name="quantity" style={{width: '40px'}}
                onChange={this.handleChange}/>
            </div>
            <div className="button-items">
                <br/>
                <button id="checkOut-button" onClick={(e)=> {this.onSubmit(e, this.state.title, this.state.price, this.state.productImage, this.state.productId)}}>Go to Checkout</button>
                <Link to='/flowers/3.2'>
                <button onClick={(e)=> {this.onContinue(e, this.state.title, this.state.price, this.state.productImage, this.state.productId)}} id="continue-button">Continue Shopping</button></Link>
            </div>
        </div>
        </form>
      </React.Fragment>
    
       );   
   }
}

