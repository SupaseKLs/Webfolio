import React from 'react'

const ImageContainer = ({imageSource, description}) => {
  return (
    <div className='image-container'>
        <img className='image' src={imageSource} alt="" />
        <p className='date'>{description}</p>
    </div>
  )
}

export default ImageContainer