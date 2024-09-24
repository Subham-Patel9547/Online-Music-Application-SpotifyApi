import React from "react";
import "./favoriteTrack.css";
function FavoriteTrackCard({
  track,
  index,
  addedAt,
  formatDate,
  formatDuration,
}) {
  return (
    <div>
      <div className="favorite-track-div">
        <div
          style={{
            width: "30%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "10%",
              color: "rgb(0, 255, 55)",
              marginLeft: "5px",
            }}
          >
            {index + 1}
          </div>
          <div
            style={{
              width: "90%",
              display: "flex",
              gap: "5px",
            }}
          >
            <div>
              <img
                src={track.album.images[2].url}
                alt="profile"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div>
              <div style={{ color: "rgb(0, 255, 55)" }}>{track.name}</div>
              <div style={{ fontSize: "15px" }}>
                {track.artists.map((artist) => artist.name).join(", ")}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "35%",
          }}
        >
          {track.name}
        </div>
        <div
          style={{
            width: "15%",
          }}
        >
          {formatDate(addedAt)}
        </div>
        <div
          style={{
            width: "5%",
          }}
        >
          {formatDuration(track.duration_ms)}
        </div>
      </div>
    </div>
  );
}

export default FavoriteTrackCard;
