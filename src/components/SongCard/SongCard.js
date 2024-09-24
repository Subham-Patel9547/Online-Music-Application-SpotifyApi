import React from 'react'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
import './songCard.css';


function SongCard({ album }) {
  return (
    <div className='song-card-Maindiv flex'>
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  )
}

export default SongCard