import React, { Component } from 'react'
import axios from 'axios'
import '../styles/_Home.scss'
import {Carousel, Button} from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import biscuits from '../images/biscuits.jpeg'
import flowers from '../images/flowers.jpeg'
import smiley from '../images/smiley-balloon.jpeg'
import table from '../images/birthday-table.jpeg'

export default class Hoe extends Component {

    constructor(props) {
        super(props);
        this.state ={
            reserve:[],
            img: ""
        }
    }


    // async componentDidMount() {
 
    //     try{
    //             const response = await axios.get("/rosy_api/v1/room_list",
    //      {       headers: {
    //         'Access-Control-Allow-Credentials' : true,
    //         'Access-Control-Allow-Origin':'*',
    //         'Access-Control-Allow-Methods':'GET',
    //         'Access-Control-Allow-Headers':'application/json',
            
    //       },
    //               });
    //             console.log(JSON.stringify(response.data[0].roomImage));
    //             this.setState({reserve: response.data, img: response.data[0].roomImage})
    //         }
    
    //     catch(e){
    //             console.log("Error", e)
    //         }
    //     }
    render() {
//         console.log(this.state.img);
//         const {url}= this.state.img
//      return (
//             <div className="room-main-container">
                
// {/* <img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="sdfsd" /> */}
//                  {this.state.reserve.map((res) => <div className="room-container">

//                     <img src={res.roomImage}  hegith="400px" width="400px" alt="sfdsf" />
//                     <p>{res.amenities} &nbsp; {res.price} &nbsp; &nbsp;{res.roomType} </p>
                 
                 
//                      </div>
//                     )} 
//             </div>
//         )
//     }
// }
return (
    <React.Fragment>
        <div className="home-container">

        <div>

        <img style={{'height':"400px" , 'width': "250px"}}  src={flowers} alt="slide"  />
                        
                       
                        <Link to='/flowers/3.2' className="link"> <p>flowers for special occasion</p></Link>
      </div>
      <div>
          <img style={{'height':"400px" , 'width': "250px"}} 
                
                src={table} 
                alt="slide"  
                />  
                      
                <Link to='/partySupplies/3.3'className="link"><p className="captions">party Supplies</p></Link>
                </div>
      <div>
          <img style={{'height':"400px" , 'width': "250px"}} 
                
                src={biscuits} 
                alt="slide"  
                />  
                  <Link to='/giftBasket/3.1' className="link"><p>amazon special gift baskets</p></Link>
      
      </div>
          
    
              
             

        </div>
     
    </React.Fragment>
     )
 }
}