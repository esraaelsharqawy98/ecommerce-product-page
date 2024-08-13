import { useState } from "react";

function Quantity() {
    const [quantity , setQuntity] = useState(0);
    function decrementQuantity(){
      quantity > 0 &&  setQuntity(quantity - 1);
    }
    function incrementQuantity(){
        setQuntity(quantity + 1);
    }
   return (
    <div className="product-quantity">
      <button className="minus" onClick={decrementQuantity}>
        <img src="/images/icon-minus.svg" alt="minus" />
      </button>
      <span className="quantity">{quantity}</span>
      <button className="plus" onClick={incrementQuantity}>
        <img src="/images/icon-plus.svg" alt="plus" />
      </button>
    </div>
  );
}
export default Quantity;
