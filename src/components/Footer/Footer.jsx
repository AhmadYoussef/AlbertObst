import React from 'react';
import './Footer.scss';
import ScrollTop from './ScrollTop/ScrollTop';
import contactUs from './ContactUs.svg'
import callUs from './callUs.svg'

const footer = props => {
    return (
        <footer>
            <ScrollTop />
            <section style={{display: "flex", justifyContent: "center", backgroundColor: "rgb(51,102,102)"}}>
                <div className="callUs">
                    <div>
                        <p style={{display:'flex', alignItems: 'center'}}>
                        <img src={contactUs} alt="mail box"/>

                        <span style={{paddingLeft: "9px"}}>Kontaktieren Sie uns</span></p>
                        <p>
                        <a href="mailto:info@Albertobst.com"  >info@Albertobst.com</a></p>
                    </div>
                    <div>
                        <p style={{display:'flex', alignItems: 'center'}}>
                        <img src={callUs} alt="phone"/>
                           <span style={{paddingLeft: "9px"}}> Rufen Sie uns</span></p>
                        <p><a href="tel:+491633135242">+49 163 3135 242</a></p>
                        <p><a href="tel:+4917622620293">+49 1762 2620293</a></p>
                    </div>
                </div>
            </section>
            <div className="copyRight">
                <p><small>Albertobst © 2019</small></p>
            </div>
        </footer>
    );
}


export default footer;
