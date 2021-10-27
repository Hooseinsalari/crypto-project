import React from 'react';

// style
import styles from "./Coins.module.css"

const Coins = ({symbol, coinName, coinImage, coinPrice, changePrice, marketCap}) => {
    return (
        <div className={styles.container}>
            <img className={styles.coinImg} src={coinImage} alt="coinImage"/>
            <span className={styles.name}>{coinName}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.coinPrice}>$ {coinPrice.toLocaleString()}</span>
            <span className={changePrice < 0 ? styles.plusPrice : styles.negativePrice}>{changePrice.toFixed(2)}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coins;