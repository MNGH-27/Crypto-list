import React , {useState} from 'react';

//Style
import './Coin.css';

const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {
    const[showtooltip , setShowtooltip] = useState(false)

    const onHoverHandler = () => {
        setShowtooltip(
            !showtooltip
        )
        console.log(showtooltip);
    }

    return (
        <div className='coin-container' onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}>
            <img src={image} alt="Logo" />
            
            <div className='name'>
                <p className={`hidden ${showtooltip ? 'tooltip' : ''}`}>Name</p>
                {name}
            </div>
            
            <div className='symbol'>
                <p className={`hidden ${showtooltip ? 'tooltip' : ''}`}>Symbol</p>
                {symbol.toUpperCase()}
            </div>
            <div className='price'>
                <p className={`hidden ${showtooltip ? 'tooltip' : ''}`}>Price</p>
                {price.toLocaleString()}$
            </div>
            <div className='marketCap'>
                <p className={`hidden ${showtooltip ? 'tooltip' : ''}`}>MarketCap</p>
                {marketCap.toLocaleString()}$
            </div>
            <div className={`priceChange ${ priceChange < 0 ? 'red' : 'green'} `}>
                <p className={`hidden ${showtooltip ? 'tooltip' : ''}`}>PriceChange</p>
                {priceChange.toFixed(2)}{
                    priceChange < 0 ?
                    <i className="fas fa-arrow-down"></i> :
                    <i className="fas fa-arrow-up"></i>
                }
            </div>
        </div>
    );
};

export default Coin;