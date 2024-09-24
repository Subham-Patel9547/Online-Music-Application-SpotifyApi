import React, { useState, useEffect } from "react";
import APIKit from "../../Spotify";
import apiClient from "../../Spotify";
import FavoriteSongDetailsheading from "./FavoriteSongDetailsheading";
import FavoriteTrackCard from "./favoriteCard/FavoriteTrackCard";
import "./favorite.css";

function Favorite() {
  const [favoriteTracks, setFavoriteTracks] = useState([]);
  const [users, setUsers] = useState("");
  const [items, setItems] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url); // User Profile Image Api
      setUsers(response.data.display_name); // Profile UserName Api
    });
  }, []);

  useEffect(() => {
    APIKit.get("me/tracks").then(function (response) {
      setFavoriteTracks(response.data.items);
      setItems(response.data.total);
      // console.log(response.data);
    });
  }, []);

  // Format added_at dd/mm/yyy,milisecond convert dd/mm/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Format duration_ms miliSecond convert Minute:Second
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="screen-Cointainer">
      <div className="favorite-body">
        <div className="favorite-content-div">
          <div className="favorite-heart-image-div">
            <div id="heart"></div>
          </div>
          <div className="favorite-info-div">
            <h3>Playlist</h3>
            <h1 className="liked-heading">Liked Songs</h1>
            <div
              style={{
                height: "50px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div className="profile-image">
                <img src={image} alt="profile" />
              </div>
              <div style={{ fontWeight: "bold" }}>{users}</div>
              <div style={{ fontWeight: "bold" }}>{items} Songs</div>
            </div>
          </div>
        </div>

        <div className="favorite-tracks">
          <FavoriteSongDetailsheading />

          {favoriteTracks?.map((trackItem, index) => (
            <div key={index} className="favorite-card" style={{marginTop:'5px'}}>
              <FavoriteTrackCard
                key={index}
                track={trackItem.track}
                index={index}
                addedAt={trackItem.added_at} // Pass added_at here
                formatDate={formatDate}
                formatDuration={formatDuration}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
