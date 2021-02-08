import React from 'react';
import '../../Styles/layout.css'
import logo from '../../Styles/images/logo_ilerna.png'

export default class Header extends React.Component{

constructor(props){
    super(props)
    this.state = {
        menu: false
    }
}

  render = () => (
    <div className='layout-header'>
        <div className='layout-header__bar'>
            <img src={logo} className='layout-logo'/>
            <div className='layout-header__navbar'>
                <div className='layout-header__navbar-item'>GALLERY</div>
                <div className='layout-header__navbar-item'>HISTORIES</div>
                <div className='layout-header__navbar-item'>USERS</div>
            </div>
            <div className='layout-header__navbar-movil'>
            </div>
        </div>
        
    </div>

    
    
  )
}
