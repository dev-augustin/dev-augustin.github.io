import React, { Component } from 'react'
import axios from 'axios'
import '../styles/_Home.scss'
import {Carousel, Button} from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import biscuits from '../images/biscuits.jpeg'
import flowers from '../images/flowers.jpeg'
import smiley from '../images/smiley-balloon.jpeg'
import table from '../images/birthday-table.jpeg'



export default function Home() {
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

