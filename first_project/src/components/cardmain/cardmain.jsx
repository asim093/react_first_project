import React from 'react';
import styles from './cardmain.module.css';
import SecondSection from '../section-top/second.jsx';
import packageIMg from '../../assets/packageswrapper.png';
import Cards from '../Card/cards.jsx';

let CardName = [
  {
    name: 'Basic Web',
    price: 225
  },
  {
    name: 'Startup Web',
    price: 425
  },
  {
    name: 'Professional Web',
    price: 825
  },
  {
    name: 'Identity Web',
    price: 1425
  },
  {
    name: 'Elite Web',
    price: 1825
  },
  {
    name: 'Corporate Web',
    price: 3425
  },
  {
    name: 'Customize Web Portal',
    price: 5825
  },
  {
    name: 'Golden Web',
    price: 14825
  },
  {
    name: 'Platinum Web',
    price: 24825
  },
];

const Cardmain = () => {
  return (
    <div className={styles.mainparent}>
      <SecondSection backgroundImage={packageIMg} title="PRICES" para="PRICES PACKAGES" />
      <div className={`${styles.cardlink} container`}>
        <div>
          <button>WEB DESIGN</button>
        </div>
        <div>
          <button>MAGENTO</button>
        </div>
        <div>
          <button>WEB DEVELOPMENT</button>
        </div>
        <div>
          <button>WORDPRESS</button>
        </div>
        <div>
          <button>ECOMMERCE</button>
        </div>
        <div>
          <button>SHOPIFY</button>
        </div>
      </div>
      <div className={`${styles.cardcontainer} container`}>

        {CardName.map((card, index) => (
          <Cards key={index} name={card.name} price={card.price} />
        ))}

      </div>
    </div>
  );
};

export default Cardmain;
