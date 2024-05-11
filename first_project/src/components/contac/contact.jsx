import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactmain}>
            <h1>LET'S START WORKING TOGETHER ON YOUR AMAZING PROJECT</h1>
            <form className={`${styles.main} container`} style={{width: '50%' , position:'relative'}}>
                <div className="mb-3 row">
                   
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="firstName" placeholder=" Firstname" />
                    </div>
                   
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="lastName" placeholder=" Lastname" />
                    </div>
                </div>
                <div className="mb-3 row">
                   
                    <div className="col-sm-12">
                        <textarea className="form-control" id="message" rows="3" placeholder='Write your message here'></textarea>
                    </div>
                </div>
               
                 
                        <button type="submit" className="btn ">Submit</button>
                   
               
            </form>
        </div>
    );
};

export default Contact;
