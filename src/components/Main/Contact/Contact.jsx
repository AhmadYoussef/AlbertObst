import React from 'react';
import './Contact.scss';
import Form from '../../../container/Form';
import contactUs from '../../../assets/contactUs.png'


const contact = ()=>{
    return(
        <main className="contactUs">
            <div className="bakImgContact">
                <img src={contactUs} alt="Contact"/>
            </div>
            <section>
                <div>
                    <h3>Kontkt uns</h3>
                    <h4>Wir sind für Sie da!</h4>
                    <p>Wir würden uns freuen, von Ihnen zu hören. Unsere freundlichen Mitarbeiter beantworten gerne Ihre Fragen.</p>
                </div>
                <Form />
            </section>
        </main>
    );
}

export default contact
