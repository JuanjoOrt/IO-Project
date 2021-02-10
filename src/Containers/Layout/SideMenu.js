import React from 'react';
import { Link } from "wouter";
import '../../Styles/layout.css'

export default class SideMenu extends React.Component{

  render = () => 
      (this.props.visible)
      ?  <div className='layout-header__sideMenu-movil'>
          <Link href="/about"><div className='layout-header__navbar-item'>ABOUT</div></Link>
        </div>
      : <div />
}
