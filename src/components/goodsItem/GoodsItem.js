import imgNotFount from '../../img/image_not_found.png'

import './GoodsItem.css'

const GoodsItem = (props) => {
  const {mainId, displayName, displayDescription, addToBAsket = Function.prototype } = props;
  const {finalPrice} = props.price;
  const {full_background} = props.displayAssets[0];

  return (
    <div className="padding">
      <div className="card">
        <div className="card-image">
          {
            imgNotFount === 'N/A' ? <img src={imgNotFount} alt={displayName} /> :
            <img src={full_background} alt={displayName} />
          }            
        </div>
        <div className="card-title text-align">{displayName}</div>
        <div className="card-content">
          <p>{displayDescription} </p> 
        </div>
        <div className="card-action">
          <button onClick={() => addToBAsket({
            mainId,
            displayName,
            finalPrice,
          })} className='btn'>Buy</button>
          <span className='right fs-27 '>{finalPrice} rub</span>
        </div>
      </div>
    </div>
  )
}

export default GoodsItem;