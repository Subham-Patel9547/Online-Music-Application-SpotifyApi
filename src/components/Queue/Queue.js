import React from 'react'
import './Queue.css';

function Queue({ tracks, setCurrentIndex,formatDuration }) {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list flex">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>{formatDuration(track?.track?.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Queue