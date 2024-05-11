import React from 'react';
import styles from './content.module.css'; // Import CSS module for styling

const Content = (props) => {
    return (
        <div className={`${styles.contentMain} container`}>
            <div className="row">
                <div className={`col-lg-6 d-flex align-items-center justify-content-center ${styles.imgSection}`}>
                    <img src={props.img} alt="Content Image" className={styles.contentImage} />
                </div>
                <div className="col-lg-6">
                    <div className={`Contentsection ${styles.contentSection}`}>
                        <h1 className={styles.firsthead}>{props.firsthead}</h1>
                        <h2 className={styles.secondhead}>{props.secondhead}</h2>
                        {/* <h3 className={styles.thirdhead}>{props.thirdhead}</h3> */}
                        <p className={styles.para}>{props.paracontent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
