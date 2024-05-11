import React from 'react';
import NavImg from '../../assets/logo.png';
import styles from './navbar.module.css'; // Import the CSS module

function NavbarComponent() {
    return (
        <div className={`${styles.glass} container-fluid`} id='navbar'>
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className={`navbar-brand ${styles.navbarbrand}`} href="#navbar"><img src={NavImg} alt="Logo" /></a> 
                        <button className={`navbar-toggler ${styles.toggle}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className={`navbar-toggler-icon ${styles.icon}`}></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <a className={`${styles.navlink} nav-link`}  href="#herosection">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.navlink} nav-link`} href="#aboutsection">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.navlink} nav-link`} href="#servicesection">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.navlink} nav-link`} href="#pricingsection">PRICING</a>
                                </li>
                                <li className="nav-item"> 
                                    <a className={`${styles.navlink} nav-link`} href="#contactsection">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export { NavbarComponent };
