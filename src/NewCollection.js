import Dresses from "./Dresses";
import React, { useState } from "react";
import Buttons from "./Buttons";
import { DataAllItems } from "./DataAllItems";
import banner from './banner.jpg'
import SignUp from "./NewsLetter";

function NewCollection() {
  const [clothes, setClothes] = useState(DataAllItems);

  const chosenClothes = (searchTerm) => {
    const newClothes = DataAllItems.filter(
      (element) => element.searchTerm === searchTerm
    );
    setClothes(newClothes);
  };

  return (
    <div>
      <div className="banner">
        <h3>Labor Day Sale</h3>
        <h3>Extra 40% Off All Sale Items</h3>
        <h3>Use Code: Summer-Sale2024</h3>
      </div>
      <div className="AppMargin">
        <img
          className="App"
          src={banner}
          alt="mine"
          width="100%"
          height="700px"
        />
      </div>
      <Buttons filteredClothes={chosenClothes} />
      <Dresses itemsForSale={clothes} />
      <SignUp />
    </div>
  );
}

export default NewCollection;