import React, { useState } from 'react';
import styles from './faq.module.css'; // Import your CSS file for styling

const Faq = () => {
  // State to manage visibility of answers for each FAQ item


  return (
    <div className={`container ${styles.faqcontainer}`}>

      <details>
        <summary>How do i pay for the essentials or premium plan?</summary>
        <div>
          You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.
        </div>
      </details>

      <details>
        <summary>We need to add new users to our team. How will that be billed?</summary>
        <div>
          You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.
        </div>
      </details>

      <details>
        <summary>Do you offer discounts for non fropit organizations or educational institutions?</summary>
        <div>
          You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.
        </div>
      </details>

      <details>
        <summary>Can i cancel my essentials or premium plan subscription at anytime?</summary>
        <div>
          You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.
        </div>
      </details>

      <details>
        <summary>My teams wants to cancel it is subcription. How do we that? can we get a refund?</summary>
        <div>
          You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.
        </div>
      </details>
    </div>
  );
};

export default Faq;
