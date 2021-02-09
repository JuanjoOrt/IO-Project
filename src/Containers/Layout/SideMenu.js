import React from 'react';
import '../../Styles/layout.css'

export default class SideMenu extends React.Component{

  render = () => 
      (this.props.visible)
      ?  <div className='layout-header__sideMenu-movil'>
            <div className='layout-header__navbar-item'>GALLERY</div>
            <div className='layout-header__navbar-item'>HISTORIES</div>
            <div className='layout-header__navbar-item'>USERS</div>
        </div>
      : <div />
}
