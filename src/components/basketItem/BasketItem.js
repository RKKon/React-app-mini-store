const BasketItem = (props) => {
  const {mainId, displayName, quantity, finalPrice, 
        removeFromBasket = Function.prototype,
        incQuantityBasket = Function.prototype,
        decQuantityBasket = Function.prototype} = props;

  return (
    <li className="collection-item">
      {displayName} 
      <i className="material-icons basket-amount" onClick={() => decQuantityBasket(mainId)}>remove</i> 
        x{quantity} 
      <i className="material-icons basket-amount" onClick={() => incQuantityBasket(mainId)}>add</i> 
      = {finalPrice}
      <span onClick={() => removeFromBasket(mainId)} className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  )
}

export default BasketItem;