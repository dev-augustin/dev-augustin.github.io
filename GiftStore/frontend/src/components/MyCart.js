import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap';
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
                const response = await axios.get("/rosy_api/v1/orders");
                console.log(response.data);
                this.setState({reserve: response.data})
                console.log(response.data[0].total)
                // console.log(response.data[23].productImage)
            }
    
        catch(e){
                console.log("Error", e)
            }
        }
//  onChange = (event) =>{
//     event.preventDefault();
//     console.log("Onchange", event.target.value)
//     this.setState({
//       [event.target.name]:event.target.value
//     });
// }

// handleChange = (event) =>{
//     console.log("hello")
//     event.preventDefault();
//     console.log("Onchange", event.target.value)
//     this.setState({
//       [event.target.name]:event.target.value
//     });}

// onSubmit=(event) =>{
//     event.preventDefault();
//     console.log("hello")
//     // console.log(value1)
//     // console.log(value2)
//     // this.setState({reviews: value1});
//     // this.setState({flowers: value2})
//     // console.log(this.state.reviews)
//     // console.log(this.state.flowers)
  
//     let formData = {
//         price : this.state.name,
//         title : this.state.title,
    
       
//     };

//     console.log(formData)
//     // this.putAPI(formData);
// }

deleteAPI = async (id) =>{
    console.log(id)
    try{
            const response = await axios.delete(`/rosy_api/v1/orders/${id}` );
            console.log("deleted")
            console.log(response.data);
            let update = this.state.reserve.filter(i => i.id !== id);
            this.setState({reserve: update})

            // this.props.history.push('/reviews/');
            // this.setState({reserve: response.data, isLoading: false})
        }

    catch(e){
            console.log("Error", e)
        }
    }
   render(){
       console.log("in cart page")

    //    {this.onSubmit(e, res.price, res.title, res.id)}}
    // const {reserve} = this.state;
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
                                   {item.title.substring(0,30)}
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
             {/* {this.state.reserve.map((item, index) =>{
              return(

    
                <div className="item-list" key={item.id}>
                <div>
                    <img src={item.productImage} alt="flowers" height="200px" width="150px"/>
                    <span>{item.title}</span>
                    <p>${item.price}</p>
                    <p>Quantity {item.quantity}</p>
                    <p>{item.total}</p>
                    {/* <input type="text" placeholder="enter qty" id={item.id} name={item.price + "_" + index} value={item.quantity} onChange={this.handleChange}/> */}
              {/* <Button onClick={(e)=> {this.deleteAPI(item.id)}}>Delete</Button> 
              <Link to={"/editorder/" + item.id}> <Button>Edit</Button></Link>
                </div>
              <div>

            
              </div>
            </div>)})} */} 
            {/* </div> */}

            {/* <Link to='/myProfile' >  <button onClick={(e)=> {this.onSubmit(e, item.price, item.title, item.productImage)}}>Place order</button></Link> */}
       
          {/* </form> */}


{/*<div className="form-div-review">
 <form onSubmit={this.onSubmit} >
<label>
Review </label>
                    <input style={{height: '100px', marginTop: '15px'}}  type="text" name="Review" value={this.state.Review} onChange={this.onChange}/>            
                    <br/>
                    <label>
                    Rating </label>
                    <input type="text" name="Rating" value={this.state.Rating} onChange={this.onChange} placeholder="on scale of 1-5"/>            
                    <br/>
                    
                    <label >
                        <input type="submit" value="Submit" />
                    </label>  
                    </form>
                   
                      
                    </div> */}
                    {/* <Button><Link to="/manageReservation"> clik</Link> /</Button> */}
                    {/* <div className="review-container">   
                    <form>

                    <Table  striped bordered hover size="sm" >
                <thead style={{backgroundColor: 'lightgray'}}>
                    <tr>
                        <th>Review</th>
                        <th>Rating</th>
                    </tr>
                    </thead> */}
                    {/* <tbody>  {this.state.reserve.map((res) => <tr key={res.id}><td>
                        {res.title} </td>
                        <td><e>$</e>{res.price}</td>
                        <td>{res.productImage}</td> */}
                        {/* <td><input type="text" placeholder="enter qty" id={res.id} oncChange={this.handleChange}/></td> */}
                        
                        {/* <td><Link to='/myProfile' ><Button onClick={(e)=> {this.onSubmit(e, res.price, res.title, res.id)}}>Edit</Button></Link></td>
                        
                        <Button onClick={(e)=> {this.deleteAPI(res.id)}}>Delete</Button> */}
                        {/* </tr>
                               )}
                                
                                </tbody>
                                
                                <input form="form-1" type="submit" onClick={this.onSubmit}></input>
            </Table>
                        </form>         */}
            
          

           {/* <Link to='/myProfile' value={this.state.reserve}> <Button>Continue to Place Order</Button> </Link> */}
                    {/* // </div> */}
  </React.Fragment>
        )
    }
}
