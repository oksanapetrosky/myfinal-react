import React from "react";
import StarRating from "./Rating";

function Dresses({itemsForSale}) {
  const handleRating = (value) => {
    console.log('Selected rating:', value);
  };
  return(<div className="products">
      {itemsForSale.map((item => {
        const {id, name, searchTerm, price, imageone} = item;
        return(<div className="product-card" key={id}>
                 <div className="buynow">
                    <button className="btn2">Quick Review</button>
                  </div>
                    <img src={imageone} width="350px" height="500px" alt="clothes" />
               <div className="product-info">
                <div className="marginStar">
                   <h4>{searchTerm} </h4>
                   <StarRating onRatingSelect={handleRating}/>
                </div>
                <h4>{name} - {price}</h4>
              </div>
        </div>)
      }))}
  </div>
  
  )
}

export default Dresses;