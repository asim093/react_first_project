// section.jsx
import React from 'react';
// import sectionimg from '../../assets/aboutwrapper.png';
import Content from '../Content/content.jsx';
import styles from './top.module.css';
import ContentImg from "../../assets/about.png"


const SecondSection = (props) => {
  return (
    
    <div className={`${styles.parent} container-fluid`}>
      <div className={`${styles.main} container-fluid`}>
        <div className={`${styles.top} container`} style={{backgroundImage: `url(${props.backgroundImage})`}}>
          <div className={styles.maindiv}>
            <h2>{props.title}</h2>

          </div>

          <div className={styles.div}>
            <h1>{props.para}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
