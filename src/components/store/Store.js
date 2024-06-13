import { useState, useEffect } from "react";

import GoodsList from "../goodsList/GoodsList";
import PreLoader from "../preLoader/PreLoader";
import { API_KEY, API_URL } from "../../config";
import Cart from "../cart/Cart";
import BasketList from "../basketList/BasketList";
import AddItemMessage from "../addItemMessage/AddItemMessage";
import ThanksMessage from "../thanksMessage/ThanksMessage";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import UseLocalStorage from "../useLocalStorage/UseLocalStorage";

const Store = () => {
  const [goods, setGoods] = useState([]);
  const [extraGoods, setExtraGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = UseLocalStorage('cart', []);;
  const [isBasketShow, setBasketShow] = useState(false);
  const [addToBasketItemMessage, setAddToBasketItemMessage] = useState("");
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  const addToBAsket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAddToBasketItemMessage(item.displayName);
  };

  const incQuantityBasket = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.mainId === itemId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const decQuantityBasket = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.mainId === itemId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAddItemMessage = () => {
    setAddToBasketItemMessage("");
  };

  const sendOrderToServer = () => {
    if (order && order.length) {
      setOrder([]);
      setBasketShow(!isBasketShow);
      setShowThanksMessage(!showThanksMessage);
      setTimeout(() => setShowThanksMessage(false), 3000);
    }
  };

  // to get Goods
  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://fortniteapi.io/v2/shop?includeRenderData=false&date=2022-12-20", {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setExtraGoods(data.shop);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <ErrorBoundary> <Cart quantity={order.length} handleBasketShow={handleBasketShow} /> </ErrorBoundary>
      <ErrorBoundary>
        {loading ? (
          <PreLoader />
        ) : (
          <GoodsList extraGoods={extraGoods} goods={goods} addToBAsket={addToBAsket} />
        )}
      </ErrorBoundary>
      {showThanksMessage ? <ThanksMessage /> : null}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantityBasket={incQuantityBasket}
          decQuantityBasket={decQuantityBasket}
          sendOrderToServer={sendOrderToServer}
        />
      )}
      {addToBasketItemMessage && (
        <AddItemMessage
          displayName={addToBasketItemMessage}
          closeAddItemMessage={closeAddItemMessage}
        />
      )}
    </main>
  );
};

export default Store;
