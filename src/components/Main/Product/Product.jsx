import React from 'react';
import './product.scss';
import Form from  '../../../container/Form';
import headImage from "../../../assets/productImage.jpg";

const product = () =>{
    return(
        <main className="product">
            <div className="headImage">
                <img src={headImage} alt="Our Product"/>
                <div className="price">
                    ab 17 eur
                </div>
            </div>
            <div className="productInfo">
                <p>
                Es ist unsere oberste Priorität, Ihnen und Ihren Mitarbeitern Früchte von höchster Qualität zu liefern. Wir sind stolz darauf, nur Früchte von höchster Qualität zu kaufen. Wenn wir Ihre Körbe zubereiten, werden die Früchte mehrfach geprüft, um sicherzustellen, dass Sie nur das beste Produkt erhalten. Es ist uns auch sehr wichtig, dass unser Service 100% stressfrei ist. <br/>
                Wir legen genau fest, wo in Ihrem Büro Sie die Früchte platzieren möchten. Unser freundlicher Obstlieferant wird das Obst bei jedem Termin mitnehmen und die leeren Körbe durch fruchtbare ersetzen. <br/>
                Es ist unsere oberste Priorität, Ihnen und Ihren Mitarbeitern Früchte von höchster Qualität zu liefern. Wir sind stolz darauf, nur Früchte von höchster Qualität zu kaufen. Wenn wir Ihre Körbe zubereiten, werden die Früchte mehrfach geprüft, um sicherzustellen, dass Sie nur das beste Produkt erhalten. Es ist uns auch sehr wichtig, dass unser Service 100% stressfrei ist.<br/>
                Wir legen genau fest, wo in Ihrem Büro Sie die Früchte platzieren möchten. Unser freundlicher Obstlieferant wird das Obst bei jedem Termin mitnehmen und die leeren Körbe durch fruchtbare ersetzen. Wir haben normalerweise eine Mischung aus Äpfeln, Mandarinen, Bananen, Trauben, Birnen und Beeren (Erdbeeren, Himbeeren und Blaubeeren). * Fruchtmischung kann je nach Saison variieren *.
                </p>
            </div>
            <div style={{borderTop: "10px solid #336666", marginTop: "60px"}}>
                <div className="ProductOrder">
                    <h3>Place your Order</h3>

                    <Form />
                </div>
            </div>
        </main>
    );
}

export default product;
