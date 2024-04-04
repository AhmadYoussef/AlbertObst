import React from 'react';
import './SideNavBar.scss';
import {NavLink} from "react-router-dom";
import hamburger from './hamburgerBtn.svg'
import close from './closeBtn.svg'
class SideNavBar extends React.Component{
    // state={
    //     showSideBar: false,
    // }

    // showSideBar = ()=>{
    //     this.setState({showSideBar: true});
    // }
    // closeSideBar =() =>{
    //     this.setState({showSideBar: false});
    // }
    render(){
        let sideBar =   null;
        let sideBarClass = 'sideNavBar';
        if(this.props.showSideBar){
            sideBar =   <div className="sideBarCloser" onClick={this.props.closeSideBar}/>
            sideBarClass = 'sideNavBar open';           
        }
        return(
            <>
            <button className="sideBarBtn" onClick={this.props.showSideBarhandler}>
                <img src={hamburger} alt="Hamburger Button"/>
            </button>
            <div className={sideBarClass} >
                            <ul>
                                <NavLink exact to="/" onClick={this.props.closeSideBar}><li>Home <span /> </li></NavLink>
                                <NavLink to="/Produkt/" onClick={this.props.closeSideBar}><li>Produkt <span /> </li></NavLink>
                                <NavLink to="/uberUns/" onClick={this.props.closeSideBar}><li>Über uns <span /> </li></NavLink>
                                <NavLink to="/Kontakt/" onClick={this.props.closeSideBar}><li>Kontakt uns <span /> </li></NavLink>
                            </ul>
                            <div className="closeStyle">
                                <div onClick={this.props.closeSideBar}>
                                    <img src={close} alt="Hamburger Button"/>
                                </div>
                            </div>
                        </div>
            {sideBar}
            </>
        );
    }
}


export default SideNavBar;
