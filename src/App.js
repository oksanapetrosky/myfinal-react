import './App.css';
import React from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route,
Link
} from "react-router-dom";

import Home from './Home';
import ContactUs from './ContactUs';

import Login from './Login';
import NewCollection from './NewCollection';
import FabulousFits from './FabulousFits'

function App() {

 return ( <Router>
     <nav >
      <Link to="/#"  className="logo">FabulousFits</Link> 
      <Link to="/home" className='link' >Home</Link>
       <Link to="/newcollection" className='link' >New Collection</Link>
      <Link to="/contactus" className='link' >Contact Us</Link>
      <Link to="/login" className='link' >Log In/Sign Up</Link>      
 </nav>
     <Routes >
     <Route  path="/fabulousfits" element={<FabulousFits />} />
     <Route  path="/home" element={<Home />} />
     <Route  path="/newcollection" element={<NewCollection/>} />
     <Route  path="/contactus" element={<ContactUs/>} />
     <Route  path="/login" element={<Login/>} />
     <Route  path="/newcollection" element={<NewCollection/>} />
    </Routes>
    </Router>

 );
}


export default App;