import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/_MyCart.scss'

export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state ={
            reviews: [],
            flowers:[],
            Review: "",
            Rating: "",
            deleted: [],
            reserve:[]
        }
      
    }

    async componentDidMount() {
 
        try{
                const response = await axios.get("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders");
        
                this.setState({reserve: response.data})
                
            }
    
        catch(e){
                console.log("Error", e)
            }
        }

deleteAPI = async (id) =>{
    console.log(id)
    try{
            const response = await axios.delete(`https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders/${id}` );
            let update = this.state.reserve.filter(i => i.id !== id);
            this.setState({reserve: update})

        }

    catch(e){
            console.log("Error", e)
        }
    }
   render(){
     
       return(
        <React.Fragment>

            <div className="my-cart-main-container">
            <h3 className="view-order-header">Order Summary</h3>
            <div className="buttons-table">
                 <Link to='/' value={this.state.reserve}> <Button variant="info" style={{marginRight: "35px"}}>Continue Shopping</Button> </Link> 
               
                 <Link to='/myProfile' value={this.state.reserve}> <Button variant="info">Continue to Place Order</Button> </Link> 
                </div>
            <div className="order-container">
                <Table className="table-list" bordered striped>
                    <thead  bordered hover size="sm" style={{backgroundColor: 'lightgray'}}>
                        <tr striped bordered hover size="sm" style={{backgroundColor: 'lightgray'}}>
                            <th>#</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>SubTotal</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody striped>
                        {this.state.reserve.map((item, index) =>{ return(
                            <tr key={item.id}>
                                <td>
                                    <img src={item.productImage} alt="flowers" height="175px" width="150px"/>
                                </td>
                                <td>
                                   {item.title}
                                </td>
                                <td>
                                   {item.quantity} 
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                     {item.total}
                                </td>
                                <td id="table-buttons">
                                    <Link to={"/editorder/" + item.id}> <Button variant="link" style={{fontSize: "20px"}}>Update Qty</Button></Link>
                                </td>
                                <td>
                                     <Button variant="link" style={{fontSize: "20px"}} onClick={(e)=> {this.deleteAPI(item.id)}}>Delete Item</Button> 
                                </td>
                            </tr>)})}
                    </tbody>
               </Table>   
                </div>
                <div className="buttons-table">
                 <Link to='/' value={this.state.reserve}> <Button variant="info" style={{marginRight: "35px"}}>Continue Shopping</Button> </Link> 
               
                 <Link to='/myProfile' value={this.state.reserve}> <Button variant="info">Continue to Place Order</Button> </Link> 
                </div>
                
            </div> 

  </React.Fragment>
        )
    }
}
