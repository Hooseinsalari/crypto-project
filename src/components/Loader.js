import React from 'react';

import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div>
            {/* <div className={styles.container}>
                <div className={styles.yellow}></div>
                <div className={styles.red}></div>
                <div className={styles.blue}></div>
                <div className={styles.violet}></div>
            </div> */}
            
            <h2>Loading...</h2>
            <div className={styles.loader}></div>

            
        </div>
    );
};

export default Loader;