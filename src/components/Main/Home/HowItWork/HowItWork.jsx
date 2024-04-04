import React from 'react';
import './HowItWork.scss';
import WorkStep from './WorkStep/WorkStep'



const howItWork = props =>{
    return(
        <section className="howWork">
            <h3>Wie können Sie bestellen?</h3>
            <div className="figs">
                {props.howWork.map((item , index) => <WorkStep key={index} {...item} />)}
            </div>
        </section>
    );
}
export default howItWork;