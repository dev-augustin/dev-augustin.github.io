import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/_Review.scss'

export default class Reviews extends Component {

    
    constructor(props) {
        super(props);
        this.state ={
            reviews: [],
            Review: "",
            email: "",
            reserve:[]
        }
      
    }
 onChange = (event) =>{
    event.preventDefault();
    console.log("Onchange", event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    });
}


onSubmit=(event) =>{
    console.log(this.state.Review)
    event.preventDefault();
    let formData = {
        review : this.state.Review,
        email : this.state.email,
       
    };
    this.postAPI(formData);
}

postAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.post("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/form", formData
           
            );
            console.log(response.data);
        }

    catch(e){
            console.log("Error", e)
        }
    }
   render(){

       return(
        <React.Fragment>
               <div className="form-div-review">
                 <div>
                 <h4 id="review-heading" > Questions&nbsp;|&nbsp;Suggestions</h4>
                 </div>
            

                   <div>
                   <form onSubmit={this.onSubmit} >
                    <label className="label-review">
                            Questions| Feedback 
                    </label>
                    <input className="input-review" style={{height: '100px', width: "250px"}}  type="text" name="Review" value={this.state.Review} onChange={this.onChange}/>            
                    <br/><br/>
                    <label className="label-review">
                    Email </label>
                    <input className="input-review-email" type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder="email address"/>            
                    <br/><br/>
                    
                   
                    <Link to='/thankyou'>  <input type="submit" value="Submit" id="submit-button"/> </Link>
                    
                    </form>
                   </div>
                      
                    </div>
    
  </React.Fragment>
        )
    }
}
