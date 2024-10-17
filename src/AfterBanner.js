import React from "react";
import { Images } from './Shoes';


function AfterBanner() {
  const imageComponent = Images.map((listing, id, content) => (

      <div key={id}>
          <div className="image-container" >
                 <img className="zoom-image" src={listing.image} alt="banner" width="500px" height="600px" />
               <div className="marginbanner">
                  <h2 id="specialOffer">{listing.content}</h2>
            </div> 
          </div>
      </div>
  ))
    return(<div className="products">
        {imageComponent}
  </div>)
    
  }
  
  export default AfterBanner;