import React from "react";

function FavoriteSongDetailsheading() {
  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "rgb(0, 255, 55)",
          borderRadius: "5px",
          marginTop: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            "linear-gradient(90deg,rgb(7, 91, 80)  0%, rgb(5, 4, 88) 100%)",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "10%",
              marginLeft: "5px",
            }}
          >
            #
          </div>
          <div
            style={{
              width: "90%",
            }}
          >
            Title
          </div>
        </div>
        <div
          style={{
            width: "35%",
          }}
        >
          Album
        </div>
        <div
          style={{
            width: "15%",
          }}
        >
          Date Added
        </div>
        <div
          style={{
            width: "5%",
          }}
        >
          Time
        </div>
      </div>
    </div>
  );
}

export default FavoriteSongDetailsheading;
