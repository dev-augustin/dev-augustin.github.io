import React, { Component } from 'react';
// import { Button, Form, FormGroup, Input, Lable, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';
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
            console.log(response.data.price);
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

//   loadUser() {
//     ApiService.fetchUserById(window.localStorage.getItem("userId"))
//         .then((res) => {
//             let user = res.data.result;
//             this.setState({
//             id: user.id,
//             username: user.username,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             age: user.age,
//             salary: user.salary,
//             })
//         });
// }
//   onChange = (event) =>{
//     event.preventDefault();
//     console.log("Onchange", event.target.value)
//     this.setState({
//       [event.target.name]:event.target.value
//     });
// }
handleChange = (event) =>{
    console.log("inside handleChange")
    console.log(event.target.name, event.target.value)
     event.preventDefault();
     this.setState({[event.target.name] : event.target.value})
}

onSubmit=(event) =>{
    event.preventDefault();
    let y= (this.state.quantity*this.state.price).toFixed(2);
    console.log(y)
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
    console.log(formData)
    try{
            const response = await axios.put("/rosy_api/v1/orders/"+this.props.match.params.id, formData
           
            );
            console.log(response.data);
            // this.setState({reserve: response.data, isLoading: false})
            this.props.history.push('/myCart');
        }

    catch(e){
            console.log("Error", e)
        }

        // this.props.history.push('/manageReservation/');
    }

    onContinue=(event) =>{
        alert("Quantity updated to cart. Continue shopping");
        event.preventDefault();
        let y= (this.state.quantity*this.state.price).toFixed(2);
        console.log(y)
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
        console.log(formData)
        try{
                const response = await axios.put("/rosy_api/v1/orders/"+this.props.match.params.id, formData
               
                );
                console.log(response.data);
                // this.setState({reserve: response.data, isLoading: false})
                this.props.history.push('/flowers/3.2');
            }
    
        catch(e){
                console.log("Error", e)
            }
    
            // this.props.history.push('/manageReservation/');
        }
   render(){
    // const {reserve} = this.state;
    console.log(this.state.id)
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

                {/* <button onClick={(e)=> {this.onSubmit(e, item.productImage, item.title, item.price, item.productId)}}>Add</button> */}
                {/* // <Link to='/myCart'><button>View Cart</button></Link> */}
        </div>
        </form>
      </React.Fragment>
    
       );   
   }
}

