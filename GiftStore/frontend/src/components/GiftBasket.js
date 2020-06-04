
import React, { Component } from 'react';
import axios from 'axios';
import '../styles/_GiftBasket.scss'

const API_KEY=process.env.REACT_APP_API_KEY; 
const params={
        api_key: API_KEY,
        type: "category",
        url: "https://www.amazon.com/s?k=gift+baskets&rh=n%3A2255572011&pd_rd_r=14ca9469-a37d-4280-87bf-c973a1221454&pd_rd_w=6hGNi&pd_rd_wg=2Rkvd&pf_rd_p=c856543c-2236-42b5-8daa-bc8c644a2565&pf_rd_r=M7YNTCAX2KA01QN71Y41&qid=1591021006&ref=sxts_ref_scx_alster_1"
   }

export default class GiftBasket extends Component {
            
    constructor(props){
        super(props);
        this.state = {
            displayResults: '',
            reserve:[],
            price: 3,
            title: "Candy & Chocolate Gifts"
        }
    }
 
    componentDidMount(){
        this.searchRequest();
    }

    searchRequest = async () =>{

        try{
      
            const response= await axios.get('https://cors-anywhere.herokuapp.com/https://api.rainforestapi.com/request', { params })
            this.setState({reserve: response.data.category_results})

        }
            
        catch(e){
            console.log(e)
        }
    }

onSubmit=(event,image, title, price,productId ) =>{

    alert("Proceed to add quantity");
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
                         <h5 className="gift-basket-header">Amazon Gift Baskets</h5>
                <div className="results-container"> 
               
         {
             this.state.reserve.map((item, index) => {
                 return (

                     <div className="poster-results"><ul key= {item.id} className="lists-display">
                     <li className="results-li"> <img src= {item.image}  alt="different Images" height = "300px" width="250px" /> 
                     <h5 id="item-title">{this.state.title}</h5> 
                     <h5 id="item-price">${this.state.price+ (Math.random()*2).toFixed(2)}</h5>
                     <button className="add-button" onClick={(e)=> {this.onSubmit(e, item.image, this.state.title, this.state.price+ (Math.random()*2).toFixed(2), item.asin, item.id)}}>Add</button>
                     </li>

                     </ul> 
                   
                     </div>)
                     
                
             } )
         }
         </div> 

    </React.Fragment>
)}
        }
