import React from 'react';
import '../../Styles/layout.css'
import { Link } from "wouter";


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
        <Link href="/"><div className="layout-logo">PRUEBA TECNICA ILERNA</div></Link>
        </div>
        
    </div>

    
    
  )
}
