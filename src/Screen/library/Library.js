import React, { useState, useEffect } from "react";
import APIKit from "../../Spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './library.css'

function Library() {

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      // console.log(response.data)
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-Cointainer">
    <div className="library-body">
      {playlists?.map((playlist) => (
        <div
          className="playlist-card"
          key={playlist.id}
          onClick={() => playPlaylist(playlist.id)}
        >
          <img
            src={playlist.images[0].url}
            className="playlist-image"
            alt="Playlist-Art"
          />
          <div className="playlistDetails-Div">
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
          <div className="playlist-button-div">
            <IconContext.Provider value={{ size: "50px", color: "aqua" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </div>
          </div>
        </div>
      ))} 
    </div>
  </div>
  )
}

export default Library