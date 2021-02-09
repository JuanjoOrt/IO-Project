import React from 'react';
import '../../Styles/layout.css'
import { Link } from "wouter";
import { Fade as Hamburger } from 'hamburger-react'

import logo from '../../Styles/images/logo_ilerna.png'
import SideMenu from './SideMenu'

export default class Header extends React.Component{

constructor(props){
    super(props)
    this.state = {
        menu: false
    }
}

handleClick = () => {
    this.setState({menu: !this.state.menu})
}

  render = () => (
    <div className='layout-header'>
        <div className='layout-header__bar'>
        <Link href="/">
            <img src={logo} className='layout-logo'/>
        </Link>
            <div className='layout-header__navbar'>
                <div className='layout-header__navbar-item'>GALLERY</div>
                <div className='layout-header__navbar-item'>HISTORIES</div>
                <div className='layout-header__navbar-item'>USERS</div>
            </div>
            <div className='layout-header__navbar-movil'>
                <Hamburger  onToggle={() => this.handleClick()}/>
            </div>
        </div>
        <SideMenu visible={this.state.menu}/>
        
    </div>

    
    
  )
}
