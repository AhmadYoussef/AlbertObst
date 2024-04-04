import React from 'react';
import './navBar.scss';
import Nav from './Nav/Nav';
import logo from '../../assets/logo.png';
import {NavLink} from "react-router-dom";
import SideNavBar from './SideNavBar/SideNavBar';


class navBar extends React.Component{
    state={
        showSideBar: false,
        isTop: true
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY  < 150;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      }
    showSideBar = ()=>{
        this.setState({showSideBar: true});
    }
    closeSideBar =() =>{
        this.setState({showSideBar: false});
    }
    render(){
        let navClass = 'head';
        
        if(!this.state.isTop){
            navClass = 'head scroll'
        }
        return(
            <div className={navClass}>
                    <NavLink exact to="/" className='logo' onClick={this.closeSideBar}>
                        <img src={logo}  alt="Albert obst"/>
                    </NavLink>
                <Nav />
                <SideNavBar showSideBar={this.state.showSideBar} showSideBarhandler={this.showSideBar} closeSideBar={this.closeSideBar} />
            </div>
        );
    }
}
export default navBar;