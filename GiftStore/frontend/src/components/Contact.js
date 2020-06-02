import React from 'react'
import Review from './Review'
import '../styles/_Contact.scss'


export default function Contact() {
    return (
        <React.Fragment>
            <div className="contact-main-container">
                <div className="contacts-main-div">
                <h4>
                    Contact Us|Locations
                    </h4>  
                    <p>
                    Ph: 123-456-7890<br/>
                    Address: 
                    123, N Ervay St, Dallas - 75204
                    </p>
                    <p>
                    Email: giftStore@gmail.com
                    <br/>
                    <span>Hours of Operations </span><br/>
                    Mon-Sun:10:00 am-10:00 pm</p>
                    <hr/>
                </div>
              
            <div className="feedback-main-div">
                    <Review/>
            </div>
        </div>
        </React.Fragment>
    )
}

