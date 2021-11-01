import React , {useState , useEffect} from 'react';

//Components
import Loading from './Loading';
import Coin from './Coin';

//API
import {GetCoins} from '../services/api';

//Style
import './Landing.css';

const Landing = () => {
    const [data , setData] = useState([]);
    const [search , setSearch] = useState('');
    useEffect(()=>{
        const fetchApi = async () => {
            const dat = (await GetCoins());
            setData(dat);
        }
        fetchApi();
    },[])

    const onChangeHandler = (event) => {
        setSearch(
            event.target.value
        )
    }

    const searcheddata = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input className='input' placeholder='Coin Name ...' type="text" name="bitsearch" onChange={onChangeHandler} value={search}/>
            {
                data.length ? 
                searcheddata.length ?
                <div className='item-container'>
                    {
                        
                        searcheddata.map(item => (
                            <Coin
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                symbol={item.symbol}
                                price={item.current_price}
                                marketCap={item.market_cap}
                                priceChange={item.price_change_percentage_24h}    
                            />
                        ))
                    }
                </div> :
                <h1 className='error'>Can't find any coin with name : {search} </h1>:
                <Loading />
            }    
        </>
    );
};

export default Landing;