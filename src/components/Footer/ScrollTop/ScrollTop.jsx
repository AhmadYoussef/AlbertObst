import React from 'react';
import './ScrollTop.scss';
import {animateScroll as scroll} from 'react-scroll';
import scrollTop from '../../../assets/scrollTop.svg'
class ScrollTop extends React.Component{
   
    scrollToTop = ()=> {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className="scrollTop up-arrow " onClick={this.scrollToTop}>
                <img src={scrollTop} alt="top arrow"/>
            </div>
        );
    }
}
export default ScrollTop;
