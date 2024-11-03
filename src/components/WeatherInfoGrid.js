import React from "react";
import { Droplets, Wind, CloudRain } from "lucide-react";

const WeatherInfoGrid = ({ humidity, windSpeed, precipitation }) => {
  return (
    <div className="info-grid">
      <div className="info-item">
        <Droplets className="info-icon" style={{ color: "lightblue" }} />
        <span>습도</span>
        <span>
          <strong>{humidity}%</strong>
        </span>
      </div>
      <div className="info-item">
        <Wind className="info-icon" style={{ color: "cadetblue" }} />
        <span>풍속</span>
        <span>
          <strong>{windSpeed}m/s</strong>
        </span>
      </div>
      <div className="info-item">
        <CloudRain className="info-icon" style={{ color: "blue" }} />
        <span>강수확률</span>
        <span>
          <strong>{precipitation}%</strong>
        </span>
      </div>
    </div>
  );
};

export default WeatherInfoGrid;
