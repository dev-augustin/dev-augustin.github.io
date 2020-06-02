import React, { Component } from 'react'
import axios from 'axios';
import {Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/_MyProfile.scss'

export default class MyProfile extends Component {

    constructor(props) {
        super(props);
        this.state ={
            reviews: [],
            flowers:[],
            Review: "",
            Rating: "",
            deleted: [],
            reserve:[],
            fullName: '',
            phone: '', 
            email: '',
            address:''
        }
      
    }

    async componentDidMount() {
 
        try{
                const response = await axios.get("/rosy_api/v1/orders");
                console.log(response.data);
                this.setState({reserve: response.data, isLoading: false})
            }
    
        catch(e){
                console.log("Error", e)
            }
        }

        onChange = (event) =>{
        event.preventDefault();
        console.log("Onchange", event.target.value)
        this.setState({
          [event.target.name]:event.target.value
        });
    }
    onSubmitProfile=(event) =>{
        event.preventDefault();
        let formData = {
            fullName : this.state.fullName,
            email : this.state.email,
            phone : this.state.phone,
            address : this.state.address,
        };
        this.postAPI(formData);
    }
    
    postAPI = async (formData) =>{
        console.log(formData)
        try{
                const response = await axios.post("/rosy_api/v1/customer", formData
               
                );
                console.log(response.data);
            }
    
        catch(e){
                console.log("Error", e)
            }
    
           this.props.history.push('/confirmation');
        }

    render() {
        return (
            <React.Fragment>
                            <h3 className="final-view-order-header">Order Confirmation</h3>
            <div className="final-cart-main-container">

            <div className="final-order-container">
                <Table className="final-table-list" bordered striped>
                        <thead  bordered hover size="sm" style={{backgroundColor: 'lightgray'}}>
                            <tr striped bordered hover size="sm" style={{backgroundColor: 'lightgray'}}>
                                <th>#</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>SubTotal</th>
                            </tr>
                        </thead>
                        <tbody striped>
                            {this.state.reserve.map((item, index) =>{ return(
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.productImage} alt="flowers" height="150px" width="150px"/>
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
                                    </tr>)})}
                                </tbody>
                    </Table>   
            </div>
            <div className = "final-form-container">
            <h5 className="customer-header">Customer Infortmation</h5>
                <form onSubmit={this.onSubmit} >

                   <label class="form-label" style={{ marginTop: '40px'}} >
                       Full Name:  </label> 
                       <input style={{marginRight:"30px"}} className="form-input" type="text" name="fullName" value={this.state.fullName} onChange={this.onChange} placeholder="Enter first & last name" ></input>            
                    <br/>
                    <label class="form-label" > 
                        Email:   </label>
                        <input  className="form-input" type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder="valid email"  />  
                               
                    <br/>
                    <label class="form-label" >
                        Phone:  </label>
                        <input className="form-input" type="text" name="phone" value={this.state.phone} onChange={this.onChange} placeholder="(000-000-0000)" />
                    <br/>
                   
                    <label class="form-label" >
                        Address:  </label>
                        <input style={{marginRight:"10px" ,height:'60px'}} className="form-input" id="text-area" type="text" name="address" value={this.state.address} onChange={this.onChange} placeholder="address" />
                    <br/>
                    <hr/>
                <div>
                <h5 className="payment-header
                "> Payment Infortmation</h5>
                <br/>
                    <label class="form-label" >
                        Name on Card:  </label>
                        <input style={{marginRight:"30px"}} className="form-input" type="text" name="Phone" value={this.state.cardName} onChange={this.onChange} placeholder="(name on card)" />
                        <br/>
                    <label class="form-label" >
                       Credit Card Number:  </label>
                       <input style={{marginRight:"67px"}} className="form-input"  type="text" name="LastName" value={this.state.cardNumber} onChange={this.onChange} placeholder="card number" ></input>            
                    <br/>
                    <label class="form-label" >
                        CVV:  </label>
                        <input style={{marginLeft: "30px"}}className="form-input"  type="text" name="Email" value={this.state.cvv} onChange={this.onChange} placeholder="cvv"  />          
                    <br/>
                    <label class="form-label" >
                        Expiry Date:  </label>
                        <input style={{marginRight:"20px"}} className="form-input" type="text" name="Phone" value={this.state.label} onChange={this.onChange} placeholder="(mm/dd/yy)" />
                    <br/>
                </div>

                <div>
                   <label id="reserve-submit">
                    <Link to='/confirmation'>  <input type="submit" style={{marginTop: '10px', paddingLeft: "20px",marginRight:'80px', textAlign:'center'}} value="Submit Order" onClick={this.onSubmitProfile}/> </Link>
                    </label> 
                    <Link to='/myCart'><input type="submit" value="View Cart" /></Link>
                </div> 
                </form>

                    <p style={{fontFamily: 'cursive'}}>(You have 24hrs to cancel after confirming your Order)</p>

                </div>
            
            </div>
            </React.Fragment>
)
        }
}
