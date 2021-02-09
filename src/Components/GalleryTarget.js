import React from 'react';
import '../../src/Styles/HomeGallery.css'

export default class GalleryTarget extends React.Component{


  render = () => (
    <div className='gallery-target__box'>
        <div className="gallery-target__content">
            <div className="gallery-target__id">{this.props.id}</div>
            <div className="gallery-target__title">{this.props.title}</div>
        </div>
    </div>
  )
}
