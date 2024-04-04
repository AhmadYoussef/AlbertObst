import React from 'react';
import {getImageUrl} from '../../../../../util';



const workStep = props =>{
    return(
        <figure>
            <div className="imgFig">
                <img src={getImageUrl(props.img)} alt=""/>
            </div>
            <figcaption>
                <div className="cap">
                    <h4>{props.title}:</h4>
                    <p>{props.content}</p>
                </div>
            </figcaption>
        </figure>
    );
}
export default workStep;
