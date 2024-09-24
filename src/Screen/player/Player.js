import React, {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../Spotify';
import SongCard from '../../components/SongCard/SongCard';
import Queue from '../../components/Queue/Queue';
import './player.css'
import AudioPLayer from '../../components/AudioPlayer/AudioPlayer';
import Widgets from '../../components/Widgets/Widgets';


function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
          console.log(res.data)
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  // Format duration_ms miliSecond convert Minute:Second
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="screen-Cointainer flex">
      <div className="left-player-body">
        <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          formatDuration={formatDuration}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} /> 
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} formatDuration={formatDuration}/> 
      </div>
    </div>
  )
}

export default Player