import React, { useState } from 'react';
import styles from './hero.module.css';
import { NavbarComponent } from '../Navbar/header.jsx';
const Herosection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideTexts = ["BUSINESS GOALS", "BUSINESS DREAMS", "BUSINESS SUCCESS"];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slideTexts.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === slideTexts.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <NavbarComponent /> 
            <div className={`${styles.main}`}>
                <div className={styles.textSlider}>
                    <button className={`${styles.carouselControlPrev} carousel-control-prev`} type="button" onClick={handlePrev}>
                        <span className={`${styles.carouselControlPrevIcon} carousel-control-prev-icon`} aria-hidden="true"></span>
                        <span className={styles.span}></span>
                    </button>
                    <div className={styles.Herocontent}>
                        <h1>ACHIEVE YOUR</h1>
                        <span>"{slideTexts[activeIndex]}"</span>
                    </div>
                    <button className={`${styles.carouselControlNext} carousel-control-next`} type="button" onClick={handleNext}>
                        <span className={`${styles.carouselControlNextIcon} carousel-control-next-icon`} aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className={`${styles.buttons} mx-auto`}>
                    <button>
                        <span>HAVE A PROJECT?</span>
                        <span>We Can Help</span>
                    </button>

                </div>

            </div>
        </div>
    );
}

export default  Herosection ;
