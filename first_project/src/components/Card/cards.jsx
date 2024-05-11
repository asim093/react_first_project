import React from 'react'
import styles from '../Card/cards.module.css'
const Cards = (props) => {
    return (
        <>
            <div className={`${styles.card} card`}>
                <div className={styles.cardhead}>
                    <h2 className={`${styles.cardfirst} text-center mt-5`}>{props.name}</h2>
                    <div className={`${styles.cardprice} d-flex justify-content-around align-items-center`}>
                        <div className={styles.dollarsign}>$</div>
                        <div className={styles.zeros}>.00</div>
                    </div>
                    <div className={styles.price}>
                        <h1 className='text-center'>{props.price}</h1>
                        <p className='text-center'>Package</p>
                    </div>
                </div>
                <div className={styles.cardbody}>
                   <h2>1 Page Website Design</h2>
                   <h2>HTML Based</h2>
                   <h2>1 Banner Design</h2>
                   <h2>Contact/Query Form</h2>
                   <h2>3 Revisions</h2>
                   <h2>Complete W3C Certified HTML</h2>
                   <h2>Complete Deployment</h2>
                   <h2>Value Added Services</h2>
                   <h2>Complete Source Files</h2>
                   <h2>Dedicated Project Manager</h2>
                   <h2>100% Ownership Rights</h2>
                   <h2>100% Satisfaction Guarantee</h2>
                   <h2>*NO MONTHLY OR ANY HIDDEN FEE*</h2>
                </div>
                <button>BUY NOW</button>
            </div>
        </>
    )
}
export default Cards

