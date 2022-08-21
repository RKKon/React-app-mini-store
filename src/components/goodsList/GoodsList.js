import GoodsItem from '../goodsItem/GoodsItem';
import './GoodsList.css'

const GoodsList = (props) => {
  const {goods = [], addToBAsket = Function.prototype} = props;

  return (
    <div className="GoodsList">
      {goods.length ? goods.map(item => {
        return <GoodsItem addToBAsket={addToBAsket} key={item.mainId} {...item} />
      }) : <h4>Nothing found</h4>
      }
    </div>
  ) 
}

export default GoodsList;