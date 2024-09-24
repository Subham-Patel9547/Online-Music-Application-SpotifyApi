import React from 'react'
import './AlbumImage.css'


function AlbumImage({ url }) {
  return (
    <div className="flex">
      <img src={url} alt="AlbumImage" className="albumImage"/>
    </div>
  )
}

export default AlbumImage