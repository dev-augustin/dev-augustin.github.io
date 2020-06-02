import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss'
// import Search from './components/Search'
import MyCart from './components/MyCart'
import MyProfile from './components/MyProfile'
// import Handmade from './components/Handmade'
import GitftBasket from './components/GiftBasket'
import Flowers from './components/Flowers'
import Navigation from './components/Navigation'
import Home from  './components/Home'
import Review from './components/Review'
import Contact from  './components/Contact'
import View from  './components/View'
import PartySupplies from  './components/PartySupplies'
import EditOrder from './components/EditOrder'
import Confirmation from  './components/Confirmation'
import ThankYou from  './components/ThankYou'

function App() {
  return (
    <Router>
       <div>
         <Navigation/>
         <Switch>
            <Route exact path = '/' component={Home}></Route>
            <Route exact path = '/myCart' component={MyCart}></Route>
            <Route exact path = '/myProfile' component={MyProfile}></Route>
            <Route exact path = '/giftBasket/3.1' component={GitftBasket}></Route>
            <Route exact path = '/flowers/3.2' component={Flowers}></Route>
            {/* <Route exact path = '/handmade/3.1' component={Handmade}></Route> */}
            <Route exact path = '/review' component={Review}></Route>
            <Route exact path = '/contact' component={Contact}></Route>
            <Route exact path = '/view' component={View}></Route>
            <Route exact path = '/editorder/:id' component={EditOrder}></Route>
            <Route exact path = '/confirmation' component={Confirmation}></Route>
            <Route exact path = '/thankyou' component={ThankYou}></Route>
            <Route exact path = '/partySupplies/3.3' component={PartySupplies}></Route>
         </Switch>

       </div>
    </Router>
    // <div className="App">
    //   {/* <button className="button">Add</button>
    //   <Search/> */}


    // </div>
  );
}

export default App;
