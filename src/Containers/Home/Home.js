import React from 'react';

import Layout from '../Layout/Layout'
import UserTarget from "../../Components/UserTarget";
import '../../Styles/HomeGallery.css'

export default class Home extends React.Component{

  componentDidMount = () => {
    this.props.fetchUsersData()
  }

  render = () => (
    <Layout>
          <div className="home__main">
            <div className="home__tittle">Users</div> 
            <div className="home__body">
              {this.props.usersData.map(user => <UserTarget id={user.id} name={user.name} email={user.email}/>)}
            </div>
          
          </div>
    </Layout>
  )
}
