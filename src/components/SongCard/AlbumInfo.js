import React from 'react'
import './AlbumInfo.css';

function AlbumInfo({ album }) {

  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  
  return (
    <div className='AlbumInfo'>
      
      <div className="albumName-container">
        <div className="marquee">
          <p style={{fontSize:'15px'}}>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
        <div>
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
        </div>
        <div>
        <p>Release Date: {album?.release_date}</p>
        </div>
      </div>
      
      </div>
  )
}

export default AlbumInfo