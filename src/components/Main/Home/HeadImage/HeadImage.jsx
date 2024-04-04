import React from 'react';
import { Link } from "react-router-dom";




const headImage = props =>{
    return(
        <section className="headImage">
        <div className="content">
            <p>Albert Obstkörbe
                Gesund und dekorativ da steigt die Arbeitsmoral</p>
            <Link to="/Produkt/">Unsere Produkte</Link>
        </div>
    </section>
    );
}
export default headImage;