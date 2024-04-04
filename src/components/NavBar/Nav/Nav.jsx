import React from 'react';
import './nav.scss';
import {NavLink} from "react-router-dom";

const nav =()=>{
        return(
            <nav>
                <ul>
                    <NavLink exact to="/"><li>Home <span></span></li></NavLink>
                    <NavLink to="/Produkt/"><li>Produkt <span></span></li></NavLink>
                    <NavLink to="/uberUns/"><li>Über uns <span></span></li></NavLink>
                    <NavLink to="/Kontakt/"><li>Kontakt uns <span></span></li></NavLink>
                </ul>
            </nav>
        );
}
export default nav;