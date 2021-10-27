import React, {useState, useEffect} from 'react';

// API
import { getApi } from '../services/Api';

// Components
import Loader from './Loader';
import Coins from './Coins';

// style
import styles from "./Landing.module.css";

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getApi();
            setCoins(data)
            console.log(data)
        }

        fetchApi()
    },[])

    const serachHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search));

    return (
        <div>
            {
                coins.length ?
                <div className={styles.container}>
                    <input type="text" onChange={serachHandler} value={search} placeholder="Search your coin" />
                    {searchCoins.map(coin => <Coins 
                        key={coin.id} 
                        symbol={coin.symbol} 
                        coinName={coin.name} 
                        coinImage={coin.image}
                        coinPrice={coin.current_price}
                        changePrice={coin.price_change_percentage_24h}
                        marketCap={coin.market_cap}
                        />)}
                </div>:
                <Loader />
            }    
        </div>
    );
};

export default Landing;