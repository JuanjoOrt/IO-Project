import React from 'react';
import Header from "./Header";
import '../../Styles/layout.css'

export default class Layout extends React.Component{

  render = () => (
    <div className='layout-main'>
        <Header />

        <div>{this.props.children}</div>
    </div>

    
    
  )
}
