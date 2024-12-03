import React from "react";
import styles from '../../styles/Home.module.css';
import banner from '../../styles/images/banner.png';

const Banner = ({ scrollToMore }) => {
    const handleScrollToMore = () => {
        if (scrollToMore) {
            scrollToMore();
        }
    };

    return (
      <section id="banner" className={styles.banner}>
        <div className={styles.left}>
            <p className={styles.content}>
                NEW YEAR
                <span>SALE</span>
            </p>
            <button onClick={handleScrollToMore} className={styles.more}>See more</button>
        </div>

        <div className={styles.right} style={{ backgroundImage: `url(${banner})` }}>
            <p className={styles.discount}>
                save up to <span> 50%</span> off
            </p>
        </div>
      </section>
    ) 
}

export default Banner;
