import BasketItem from "../basketItem/BasketItem";

const BasketList = (props) => {
  const {order = [], 
         handleBasketShow = Function.prototype,
         removeFromBasket = Function.prototype,
         incQuantityBasket = Function.prototype,
         decQuantityBasket = Function.prototype} = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {
        order.length ? order.map(item => {
          return <BasketItem removeFromBasket={removeFromBasket}
                             incQuantityBasket={incQuantityBasket}
                             decQuantityBasket={decQuantityBasket}
                             key={item.mainId} {...item} />
        }) : <li className="collection-item">Basket is empty</li>
      }
      <li className="collection-item active">Total cost: {totalPrice} rub</li>
      <li className="collection-item">
        <button className="btn btn-small">Checkout</button>
      </li>
      <i onClick={handleBasketShow} className="material-icons basket-close">close</i>
  </ul>
  )
}

export default BasketList;