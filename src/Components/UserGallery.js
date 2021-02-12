import React from 'react';
import {getPhotosById} from '../utils/lookInArray'
import '../../src/Styles/gallery.css'

export default class UserGallery extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.allPhotos !== this.props.allPhotos){
      this.setState({photos: getPhotosById(this.props.allPhotos, parseInt(this.props.list[0].id))})
    }
  }

  handlePhotoList = (id) => {
    this.setState({photos: getPhotosById(this.props.allPhotos, id)})
  }

  render = () => (
    <div className='user-gallery__box'>
        <div className='user-gallery__header'>
            <div  className='user-gallery__title'>Photobook</div>
            <select className='user-gallery__input' onChange={val => this.handlePhotoList(parseInt(val.target.value))}>
                {this.props.list.map(galleryName => <option key={galleryName.id} value={galleryName.id}>{galleryName.title}</option>)}
            </select>
        </div>
        <div className='user-gallery__body'>
          {this.state.photos.map(photoItem => <img key={photoItem.id} src={photoItem.thumbnailUrl} className="user-gallery__photo" onClick={() => this.props.onClick(parseInt(photoItem.id))}/>)}
          <div className={'clear-space-gray'}/>
        </div>
    </div>
    
  )
}
