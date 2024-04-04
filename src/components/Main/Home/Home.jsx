import React from 'react';
import './home.scss';
import HeadImage from "./HeadImage/HeadImage"
import HowItWork from  './HowItWork/HowItWork';
import OurService  from  './OurService/OurService';
import Data from '../../../data.js';


const home = props=>{
    return(
        <main className="home">
            <HeadImage/>
            <HowItWork {...Data} />
            <OurService />
        </main>
    );
}

export default home
