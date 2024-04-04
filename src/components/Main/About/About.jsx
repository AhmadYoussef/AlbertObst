import React from 'react';
import "./About.scss";
import wuppertalImage from "../../../assets/wuppertal.jpg"

const about = ()=>{
    return(
        <main className="aboutUs">
            <div className="bakImgAbout">
                <img src={wuppertalImage} alt="shwababahn"/>
            </div>
            <section className="content">
                <h3>ÜBER UNS</h3>
                <p> Alberts Obst ist ein Unternehmen, welches seinen Kunden Obstkörbe anbietet. <br/>
                    Der Sitz des Unternehmens befindet sich in Wuppertal.<br/>
                    Wir bieten eine weitreichende Auswahl an frischen Obst an.<br/>
                    Wir wissen dass unsere Kunden der Grund dafür sind, dass wir geschäftlich tätig sein können. Weshalb wir alles daran setzten die Zufriedenheit unserer Kunden sicher zu stellen.<br/>
                    Unser Mehrwert liegt in der Qualität und Lieferung der Körbe.<br/>
                    Sollte der Kunde nicht zufrieden sein mit der Ware, werden wir uns bemühen auf die Beschwerde und die Bedürfnisse des Kunden nochmal gesondert einzugehen. Unser Traum ist es ein Netzwerk aus Einzelhandel-Standorten in NRW zu gründen, welche durch ihre einzigartige Auswahl und frische ihrer Obstkörbe regional führend in der Branche sein wird.<br/>
                    Ausserdem arbeiten wir an dem Design und dem Inhalt weiterer Körbchenmodelle, deren Inhalt süßigkeiten, Schokolade oder sogar Geschenke enthalten wird. Diese Modelle sollen sich besonders als Geschenk zu Feiertagen und Festen eignen.</p>
            </section>
        </main>
    );
}

export default about
