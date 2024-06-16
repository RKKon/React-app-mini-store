import { useState } from "react";
import GoodsItem from "../goodsItem/GoodsItem";
import "./GoodsList.css";

const GoodsList = (props) => {
  const [extraGoodsShown, setExtraGoodsShown] = useState(false);
  const [offset, setOffset] = useState(0);
  const [disable, setDisable] = useState(false);
  const { goods = [], addToBAsket = Function.prototype, extraGoods = [] } = props;

  const shoWExtraGoods = () => {
    setExtraGoodsShown(true);
    setDisable(true);
    setTimeout(() => setDisable(false), 2000);
    setOffset((prevOffset) => prevOffset + 20);
    console.log(offset);
  };

  const myGoods = goods.length ? (
    goods.slice(0, 20).map((item) => {
      return <GoodsItem addToBAsket={addToBAsket} key={item.mainId} {...item} />;
    })
  ) : (
    <h4>Nothing found</h4>
  );

  const myExtraGoods =
    extraGoodsShown && extraGoods.length
      ? extraGoods.slice(0, offset).map((el) => {
        return <GoodsItem addToBAsket={addToBAsket} key={el.mainId} {...el} />;
      })
      : null;

  return (
    <>
      <div className="GoodsList">
        {myGoods}
        {myExtraGoods}
      </div>
      <button disabled={disable} onClick={shoWExtraGoods} className="btn goodsBtn">
        See more items
      </button>
    </>
  );
};

export default GoodsList;
