function Quantity({quantity, setQuantity}) {
  function decrementQuantity() {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  }
  function incrementQuantity() {
    setQuantity(quantity + 1);
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
