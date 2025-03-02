import React from "react";
import "./ProgressCircle.css";

const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

 function ProgressCircle({
  percentage,
  isPlaying,
  size,
  color,
  image,
}) {
  return (
    <div className="progress-circle flex">
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="aqua" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="black" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="green" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={(size / 2) - ((size - 50) / 2)}
          y={(size / 2) - ((size - 60) / 2)}
          width={size - 50}
          height={size - 60}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? "active" : ""}
          x={(size / 2) - ((size - 50) / 2)}
          y={(size / 2) - ((size - 60) / 2)}
          width={size - 50}
          height={size - 60}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
}

export default ProgressCircle;