import React from 'react';
import Layout from '../Layout/Layout'

export default class Home extends React.Component{

  componentDidMount = () => {
    console.log(this.props)
  }

  render = () => (
    <Layout>
          Homeee
    </Layout>
  )
}
