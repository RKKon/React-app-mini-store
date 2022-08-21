const Cart = (props) => {
  const {quantity = 0, handleBasketShow = Function.prototype} = props;

  return (
    <div className="cart indigo accent-3 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}

export default Cart;