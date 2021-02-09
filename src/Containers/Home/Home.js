import React from 'react';
import Layout from '../Layout/Layout'
import GalleryTarget from "../../Components/GalleryTarget";
import '../../Styles/HomeGallery.css'

export default class Home extends React.Component{

  componentDidMount = () => {
    this.props.fetchGalleryData()
  }

  render = () => (
    <Layout>
          <div className="home-gallery__main">
            <div className="home-gallery__tittle">Gallery</div> 
            <div className="home-gallery__body">
              {this.props.galleryData.map(item => <GalleryTarget title={item.title} id={item.id}/>)}
            </div>
          
          </div>
    </Layout>
  )
}
