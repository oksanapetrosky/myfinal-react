import AfterBanner from "./AfterBanner";
import Slideshow from "./ImageSlider";
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./Carousel";
import Newsletter from "./NewsLetter";
import Footer from "./Footer";

import React from 'react';
import Accordion from './Accordion'; 


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
     navigate('/newcollection');
  }
  
    return(
    <div className="home" >

      <div className="banner" >
        <h3 >Labor Day Sale</h3>
        <h3 >Extra 40% Off All Sale Items</h3>
        <h3 >Use Code: Summer-Sale2024</h3>
      </div>
     <Slideshow />
      <div className="router">
         <h1>New FabulousFits Collection</h1>
         <button className="btnHome" onClick={handleClick}>Shop Now</button>
      </div>
      <div className="sectiontwo">
         <h2>Where Are You Going?</h2>
         <h2>You have places to be, and we wanna come with</h2>
         <AfterBanner />
      </div>
         <p className="sale">FabulousFits Sale 2024</p>
      <ImageSlider />
      <div className='accordion'>
      <Accordion title="10% Off for Students" 
      content1="1. Create a free Student Beans account."  
      content2="2. Verify your student status in 2mins."  
      content3="3. Reveal and enter your code at checkout."  
      image="https://cdn-icons-png.freepik.com/256/668/668262.png?ga=GA1.1.710497862.1727490035&semt=ais_hybrid" 
      />
      <Accordion title="Give $20, Get $20" 
        content4="1. Invite your friends to FabulousFits."  
        content5="2. Your friends get $20 off their first purchase."  
        content6="3. You get $20 for every friend that makes a $50 purchase."  
      image="https://cdn-icons-png.freepik.com/256/1831/1831669.png?ga=GA1.1.710497862.1727490035&semt=ais_hybrid"
      />
      <Accordion title="Free In-App Shipping" 
      content7="Love FabulousFits?" 
      content8="You'll love our app!" 
      image="https://cdn-icons-png.freepik.com/256/411/411763.png?ga=GA1.1.710497862.1727490035&semt=ais_hybrid"
      />
    </div>
     < Newsletter />

    <Footer /> 

    </div>
    )
}

export default Home;
