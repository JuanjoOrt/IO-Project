import React from 'react';

export default class Home extends React.Component{

  componentDidMount = () => {
    console.log(this.props)
  }

  render = () => (
    <div>Home</div>
  )
}
