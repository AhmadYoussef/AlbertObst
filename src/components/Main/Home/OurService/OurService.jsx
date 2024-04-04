import React from 'react';
import './OurService.scss';
import box from '../../../../assets/obstKorb.png'
const ourService = props =>{
    return(
        <section className="ourService">
            <h3>Service</h3>
            <figure>
                <div>
                    <img src={box} alt="obst Korb"/>
                </div>
                <figcaption>
                    <p>Wir bemühen uns, pünktlich und konsistent mit unseren Lieferungen Woche für Woche zu sein. Wenn Sie mit einem Aspekt Ihrer Bestellung nicht zufrieden sind, setzen Sie sich bitte mit uns in Verbindung, wir werden das Problem gerne beheben. </p>
                </figcaption>
            </figure>
        </section>
    );
}


export default ourService;
