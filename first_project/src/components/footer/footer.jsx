import React from 'react'
import styles from './footer.module.css'
import NavImg from '../../assets/logo.png';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footerlink} container`}>
        <div>
          <img src={NavImg} alt="" />
        </div>
        <div>
        <ul>
    <li><a href="#herosection">HOME</a></li>
    <li><a href="#aboutsection">ABOUT</a></li>
    <li><a href="#servicesection">SERVICES</a></li>
    <li><a href="#pricingsection">PRICING</a></li>
    <li><a href="#contactsection">CONTACT</a></li>
</ul>

        </div>
      </div>
      <hr />
      <h3>©copyright Binary Chemist 2022 - All Right Reserved</h3>
    </div>
  )
}

export default Footer